const fs = require('fs');

readAllExcerpts();

async function readAllExcerpts() {
  const directories = fs.readdirSync('./');
  const readAllDirectoriesPromise = directories.map(directory => {
    return new Promise((resolve, reject) => {
      const fileName = `${directory}/readme.md`;
      fs.readFile(fileName, 'utf-8', (err, content) => {
        if (err) {
          const knownError = ['ENOENT', 'ENOTDIR'].includes(err.code);
          if (!knownError) return reject(err);
          return resolve(null);
        }

        const formattedFileName = dateFromFileName(fileName);
        resolve(extractContent(formattedFileName, content));
      });
    });
  });

  try {
    let allExcerpts = await Promise.all(readAllDirectoriesPromise);
    allExcerpts = allExcerpts.filter(excerptMeta => excerptMeta);
    return generateReadMe(allExcerpts);
  } catch (e) {
    console.error(e);
  }
}

function dateFromFileName(fileName) {
  const dateHash = fileName.match(/(?<year>\d{2})(?<month>\d{2})(?<day>\d{2})/).groups;
  const fileDate = new Date(parseInt(`20${dateHash.year}`), parseInt(dateHash.month) - 1, parseInt(dateHash.day));
  const challengename = fileName.replace(/\d{6}|\-|\/readme\.md/g, ' ')
  return `${fileDate.toLocaleDateString()} - ${challengename}`;
}

function extractContent(fileName, fullContent) {
  const excerptRegex = /\<!-- excerpt --\>(?<excerpt>.+)\<!-- \/excerpt --\>/s;
  const extractedExcerpts = fullContent.match(excerptRegex) && fullContent.match(excerptRegex).groups;
  return { fileName, content: (extractedExcerpts && extractedExcerpts.excerpt || '') };
}

function generateReadMe(excerpts) {
  const header = '# Code Challenges\nMy Personal collections of coding brain teasers 💥';
  const allExcerpts = excerpts
    .reduce((fullContent, excerptMeta) => fullContent + `## ${excerptMeta.fileName}\n${excerptMeta.content}`, '');

  return fs.writeFileSync('README.md', `${header}\n${allExcerpts}`);
}
