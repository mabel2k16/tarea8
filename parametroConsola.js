
const request = require('request'); // n librerias que hacen lo mismo

const verTodosGits = () => {
  const options = {
    uri: 'https://api.github.com/gists', // 'https://api.github.com/users/mabel2k16/repos',
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      console.log('=====================================');
      console.log(body);
      console.log('=====================================');
      console.log(response.statusCode);
      console.log('=====================================');
      if (error) {
        return reject(error);
      }
      const repositorios = JSON.parse(body);
      return resolve(repositorios);
    });
  });
};

const repositorioRequest = (loginBuscado) => {
  let respuestaApiGithub = [{ 
    id: 56091340,
    node_id: 'MDEwOlJlcG9zaXRvcnk1NjA5MTM0MA==',
    name: 'carritom',
    full_name: 'mabel2k16/carritom',
    private: false,
    owner:
     { login: 'mabel2k16',
       id: 18427851,
       node_id: 'MDQ6VXNlcjE4NDI3ODUx',
       avatar_url: 'https://avatars3.githubusercontent.com/u/18427851?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/mabel2k16',
       html_url: 'https://github.com/mabel2k16',
       followers_url: 'https://api.github.com/users/mabel2k16/followers',
       following_url: 'https://api.github.com/users/mabel2k16/following{/other_user}',
       gists_url: 'https://api.github.com/users/mabel2k16/gists{/gist_id}',
       starred_url: 'https://api.github.com/users/mabel2k16/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/mabel2k16/subscriptions',
       organizations_url: 'https://api.github.com/users/mabel2k16/orgs',
       repos_url: 'https://api.github.com/users/mabel2k16/repos',
       events_url: 'https://api.github.com/users/mabel2k16/events{/privacy}',
       received_events_url: 'https://api.github.com/users/mabel2k16/received_events',
       type: 'User',
       site_admin: false },
    html_url: 'https://github.com/mabel2k16/carritom',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/mabel2k16/carritom',
    forks_url: 'https://api.github.com/repos/mabel2k16/carritom/forks',
    keys_url: 'https://api.github.com/repos/mabel2k16/carritom/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/mabel2k16/carritom/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/mabel2k16/carritom/teams',
    hooks_url: 'https://api.github.com/repos/mabel2k16/carritom/hooks',
    issue_events_url: 'https://api.github.com/repos/mabel2k16/carritom/issues/events{/number}',
    events_url: 'https://api.github.com/repos/mabel2k16/carritom/events',
    assignees_url: 'https://api.github.com/repos/mabel2k16/carritom/assignees{/user}',
    branches_url: 'https://api.github.com/repos/mabel2k16/carritom/branches{/branch}',
    tags_url: 'https://api.github.com/repos/mabel2k16/carritom/tags',
    blobs_url: 'https://api.github.com/repos/mabel2k16/carritom/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/mabel2k16/carritom/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/mabel2k16/carritom/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/mabel2k16/carritom/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/mabel2k16/carritom/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/mabel2k16/carritom/languages',
    stargazers_url: 'https://api.github.com/repos/mabel2k16/carritom/stargazers',
    contributors_url: 'https://api.github.com/repos/mabel2k16/carritom/contributors',
    subscribers_url: 'https://api.github.com/repos/mabel2k16/carritom/subscribers',
    subscription_url: 'https://api.github.com/repos/mabel2k16/carritom/subscription',
    commits_url: 'https://api.github.com/repos/mabel2k16/carritom/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/mabel2k16/carritom/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/mabel2k16/carritom/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/mabel2k16/carritom/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/mabel2k16/carritom/contents/{+path}',
    compare_url: 'https://api.github.com/repos/mabel2k16/carritom/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/mabel2k16/carritom/merges',
    archive_url: 'https://api.github.com/repos/mabel2k16/carritom/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/mabel2k16/carritom/downloads',
    issues_url: 'https://api.github.com/repos/mabel2k16/carritom/issues{/number}',
    pulls_url: 'https://api.github.com/repos/mabel2k16/carritom/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/mabel2k16/carritom/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/mabel2k16/carritom/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/mabel2k16/carritom/labels{/name}',
    releases_url: 'https://api.github.com/repos/mabel2k16/carritom/releases{/id}',
    deployments_url: 'https://api.github.com/repos/mabel2k16/carritom/deployments',
    created_at: '2016-04-12T19:21:40Z',
    updated_at: '2016-04-12T19:59:15Z',
    pushed_at: '2016-04-22T20:17:54Z',
    git_url: 'git://github.com/mabel2k16/carritom.git',
    ssh_url: 'git@github.com:mabel2k16/carritom.git',
    clone_url: 'https://github.com/mabel2k16/carritom.git',
    svn_url: 'https://github.com/mabel2k16/carritom',
    homepage: null,
    size: 93,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Java',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master' }];

  
  return respuestaApiGithub;
};

const repositorioRequest1 = async (loginBuscado) => {
  const options2 = {
    uri: `https://api.github.com/users/${loginBuscado}/repos`,
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  return await new Promise((resolve, reject) => {
    request(options2, (error2, response2, body2) => {
      if (error2) {
        return reject(error2);
      }
      if (response2.statusCode !== 200) {
        return reject(new Error('API rate limit exceeded'));
      }
      const respuestaJson = JSON.parse(body2);
      console.log('respuestaJson ', respuestaJson[0]);
      return resolve(respuestaJson);
    });
  });
};

const branchRequest = async(duenio, nomRepositorio) => {
  
  const options3 = {
    uri: `https://api.github.com/repos/${duenio}/${nomRepositorio}/branches`,
    headers: {
      'User-Agent': 'Awesome-Octocat-App',
    },
  };
  console.log ('nomRepositorio ', nomRepositorio, 'duenio ', duenio, 'options3 ', options3);
  return await new Promise((resolve, reject) => {
     request(options3, (error3, response3, body3) => {
      if (error3) {
        return reject(error3);
      }
      const respuestaJson =  JSON.parse(body3);
      console.log('respuestaJson ', respuestaJson)
      return resolve(respuestaJson);
    });
  });
};
/*
const loginDuenio = 'mabel2k16';
repositorioRequest(loginDuenio)
  .then((repositorios) => {
    if (Object.keys(repositorios).length > 0) {
      const vectorDePromesas = [];
      repositorios.forEach((repositorio) => {
        const branchRequestPromise = branchRequest(loginDuenio, repositorio.name);
        vectorDePromesas.push(branchRequestPromise); // hacen las llamadas
      });
      return Promise.all(vectorDePromesas); // tengo un vector de llamadas asíncronas, cuando todas esten resueltas resolver la promesa
    }
    return Promise.reject(new Error('sin repositorios'));
  })
  .then((arrayDeRespuestas) => {
    if (Object.keys(arrayDeRespuestas).length > 0) {
      console.log('===== Branch de todos los repositorios =====');
      console.log(JSON.stringify(arrayDeRespuestas, null, 4));
      console.log('=============================================');
      return Promise.resolve(arrayDeRespuestas);
    }
    return Promise.reject(new Error('Repositorios Sin branches'));
  })
  .catch((err) => {
    console.log('error', err);
    return Promise.reject(err);
  }); */

  module.exports = {
    branchRequest,
    repositorioRequest,
    repositorioRequest1,
  };