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

        const formattedFileName = fileName.replace(/\-|\/readme\.md/g, ' ');
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

function extractContent(fileName, fullContent) {
  const excerptRegex = /\<!-- excerpt --\>(?<excerpt>.+)\<!-- \/excerpt --\>/s;
  const extractedExcerpts = fullContent.match(excerptRegex) && fullContent.match(excerptRegex).groups;
  return { fileName, content: (extractedExcerpts && extractedExcerpts.excerpt || '') };
}

function generateReadMe(excerpts) {
  const header = '# code-challenges\nMy Personal collections of coding brain teasers 💥';
  const allExcerpts = excerpts
    .reduce((fullContent, excerptMeta) => fullContent + `## ${excerptMeta.fileName}\n${excerptMeta.content}`, '');

  return fs.writeFileSync('README.md', `${header}\n${allExcerpts}`);
}
