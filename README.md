# Govbr Intranet

Versão: **0.1 alfa** (`0.1-alpha`). Identificador interno do tema: `govbr`.

## Primeiro teste no Drupal 11

A declaração `core_version_requirement` foi ampliada para aceitar Drupal 11,
preservando as versões anteriormente declaradas. Essa alteração permite que o
Drupal reconheça o tema como compatível; a validação funcional ainda precisa ser
feita em uma instalação Drupal 11 com os blocos e conteúdos do site.

1. Copie o tema para `themes/custom/govbr`, dentro da raiz pública do Drupal
   (normalmente `web/themes/custom/govbr` em projetos Composer).
2. Reconstrua o cache em `/admin/config/development/performance` ou execute
   `drush cr` na instalação Drupal.
3. Em `/admin/appearance`, instale o tema Govbr Intranet e defina-o como padrão.
   O tema base `stable9` precisa estar disponível.
4. Configure os blocos nas regiões do Govbr Intranet em `/admin/structure/block`.
   Uma instalação nova não reproduz automaticamente os blocos, campos, tipos de
   conteúdo e Views do site original.
5. Confira a página inicial, artigos, notícias, listagens, formulários e busca.
   Teste também os menus no desktop e no celular, alto contraste, compartilhamento
   e o botão de voltar ao topo.
6. Confira o console do navegador e os registros do Drupal. Se o módulo Database
   Logging estiver habilitado, os registros ficam em `/admin/reports/dblog`.
   Ao relatar uma falha, registre a versão exata do Drupal, a página, os passos
   para reproduzir e a mensagem de erro.

## Pontos identificados para acompanhar

- O tema mantém `stable9` como base. Ele está presente no Drupal 11, embora já
  exista um processo de descontinuação no core e uma versão contribuída para
  Drupal 11.3 ou superior. Não é necessário trocar a base neste primeiro teste.
- `govbr.theme` usa `theme_get_setting('logo.url')`. A função está obsoleta desde
  o Drupal 11.3, com remoção prevista para o Drupal 13. Foi mantida para esta
  alteração mínima; pode gerar aviso de depreciação.
- Os formulários de busca usam `/search/node`, dependendo da busca de conteúdo
  configurada no site.
- O JavaScript pressupõe a presença de elementos do cabeçalho e usa eventos de
  carregamento da página. Convém testar também páginas com AJAX/BigPipe.

## Recursos locais e chamadas externas

- Font Awesome Free 6.4.2: CSS e todas as oito fontes WOFF2/TTF referenciadas
  estão em `assets/vendor/fontawesome/`, junto com a licença. A biblioteca do
  tema usa esse CSS local, substituindo `use.fontawesome.com`.
  Os arquivos foram copiados da distribuição 6.4.2 já existente no projeto
  local `sistema-auditoria/public/assets/fontawesome`, pois os downloads do CDN
  e do GitHub foram bloqueados pela rede. O cabeçalho identifica essa versão;
  não foi possível comparar os arquivos com a distribuição remota.
- Bootstrap (CSS e JS) e Rawline (CSS e 18 fontes WOFF) já estavam locais.
- As imagens do cabeçalho e rodapé usam o diretório do tema; quatro referências
  em `style.css` usam caminhos relativos, sem depender de `/siteintranet/`.
- Os ícones de arquivos em `style.css` ainda usam caminhos locais absolutos
  em `/core/themes/claro/images/classy/icons/`. Dependem dos arquivos do Drupal
  e precisam ser conferidos se o site estiver instalado em um subdiretório.
- Facebook e X são destinos dos botões de compartilhamento, abertos após clique.
  O link de acesso à informação no rodapé também é navegação externa.
  Esses links não carregam CSS, JS ou fontes externos na abertura da página.
- `assets/js/instafeed.min.js` contém chamadas à API do Instagram e pode carregar
  imagens externas quando inicializado. Não há carregamento nem inicialização
  dele nas bibliotecas ou templates deste repositório. Foi preservado sem ativação.
- `assets/css/style-bkp.css` é um backup que não é carregado pela biblioteca.
- URLs de documentação/licenças e namespaces SVG não são recursos remotos
  carregados pela página. Imagens `data:` estão embutidas nos próprios arquivos.

A revisão abrange o código deste tema. Blocos, conteúdo, menus, logo configurado
e módulos do site podem acrescentar recursos externos e precisam de verificação
na instalação Drupal. Depois de executar `drush cr`, confira a aba Network/Rede
do navegador, com o cache desativado, incluindo páginas com AJAX/BigPipe.
Os CSS, JS e fontes do tema devem ser solicitados ao próprio site.

## Validação realizada

Revisão estática do PHP, dos templates Twig e das bibliotecas do tema, além de
`php -l govbr.theme` com PHP 8.3.16, sem erros de sintaxe. Este repositório contém
somente o tema, sem instalação Drupal ou banco de dados para teste funcional.

Referências oficiais:

- [Stable9 no Drupal 11](https://api.drupal.org/api/drupal/core%21themes%21stable9%21stable9.info.yml/11.x)
- [Projeto contribuído Stable9](https://www.drupal.org/project/stable9)
- [Depreciação de theme_get_setting()](https://www.drupal.org/node/3035289)
