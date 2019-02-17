const { expect } = require('chai');
const promesasMultiples = require('../../parametroConsola');

let respuestaApiGithub = {};
const parametroParaGit = {
  duenio: 'mabel2k16',
  nomRepositorio: 'carritomabel',
};
describe('Parametro consola estatico', () => {
  it('debe enviar 2 parametros', () => {
    respuestaApiGithub = promesasMultiples.repositorioRequest(parametroParaGit.duenio);
    expect(respuestaApiGithub[0].owner.id).to.equals(18427851);
    expect(respuestaApiGithub[0].owner.login).to.equals('mabel2k16');
  });
});

describe('Parametro consola real', () => {

  it('debe enviar 2 parametrosaa', () => {
    let respuestaApiGithub1 = [{
      id: 'qwewqewqewq',
      full_name: 'false'
    }, {
      id: 'asdsad',
      full_name: 'false'
    }];

    respuestaApiGithub1 = promesasMultiples.repositorioRequest1(parametroParaGit.duenio);
    // expect(respuestaApiGithub).to.have.length(2);
    console.log('respuestaApiGithub ', respuestaApiGithub1)
    expect(respuestaApiGithub1[0].owner.id).to.equals(18427851);
    expect(respuestaApiGithub1[0].owner.login).to.equals('mabel2k16');
  });
});