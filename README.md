## Visão Geral

Este projeto é uma página responsiva desenvolvida em React, integrada a um backend WordPress utilizando o WP REST API e Advanced Custom Fields (ACF). O objetivo é carregar dinamicamente textos, imagens e outros conteúdos do WordPress e apresentar uma experiência de usuário moderna com animações e interações, como menu sanduíche e efeitos de hover.

## Tecnologias Utilizadas

- **Frontend:** React (com suporte a `use client`)
- **Backend:** WordPress (Headless) com WP REST API e ACF
- **Autenticação:** JWT (JSON Web Tokens) para envio de formulários
- **Estilização:** CSS (com media queries para responsividade)

---

## Configuração do WordPress

### Registro do Custom Post Type (CPT) para Formulários

No arquivo `functions.php` (ou em um plugin customizado), adicione o seguinte código para registrar o CPT `formulario`:

```php
function criar_cpt_formulario() {
    register_post_type('formulario', array(
        'labels' => array(
            'name'          => __('Formulários'),
            'singular_name' => __('Formulário'),
        ),
        'public'      => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports'    => array('title', 'editor', 'custom-fields'),
    ));
}
add_action('init', 'criar_cpt_formulario');
```

## Exposição dos Campos ACF via REST API

### No mesmo functions.php, adicione:

```php
    function my_acf_to_rest_api( $response, $post, $request ) {
        $acf_fields = get_fields($post->ID);
        if ( $acf_fields ) {
            $response->data['acf'] = $acf_fields;
        }
        return $response;
    }
    add_filter('rest_prepare_post', 'my_acf_to_rest_api', 10, 3);
    add_filter('rest_prepare_page', 'my_acf_to_rest_api', 10, 3);
    add_filter('acf/settings/rest_api', '__return_true');
```

## Configuração do JWT

### No wp-config.php, certifique-se de que as seguintes linhas estão presentes:

```php
define('JWT_AUTH_SECRET_KEY', 'sua_chave_secreta_aqui');
define('JWT_AUTH_CORS_ENABLE', true);
```

# Configuração e Execução do Projeto Frontend

## Clonar o repositório:

```sh
git clone https://github.com/yourusername/psel-monks-analista-[SeuNome].git
cd psel-monks-analista-[SeuNome]
```

## Configurar a URL do backend:

Certifique-se de que as chamadas fetch() em seus componentes, como por exemplo no Gallery.jsx, apontem para a URL correta do seu WordPress backend (ex.: http://backend.local/wp-json/wp/v2/pages/seuId).

## Rodar a aplicação:

```sh
npm run dev
```

## Acessar o site:

Abra seu navegador em http://localhost:3000

# Integração dos Componentes com a API

## Componentes

Todos os componentes recebem seus textos, imagens e links via API, na função useEffect, portanto caso algum componente não esteja sendo carregado da maneira correta certifique-se de que a URL e os parametros estão corretos. 

## Componente Forms

O componente Forms possui além da requisição GET para o backend no carregamento de suas informações possui tambem uma requisição POST para o envio do formulario, se atente tambem na configuração desta rota para que o formulario seja enviado corretamente. Para isso é necessario tambem enviar como parametro seu token de autenticação JWT(o qual será abordado mais abaixo).

# Teste de API e obtenção do token JWT

## Código de autenticação JWT

Com o plugin 'JWT authenticator for wp rest api' instalado, função 'my_acf_to_rest_api' criada e um usuário cadastrado em sua aplicação WordPress, vá ao Postman e faça uma requisição do metodo POST para a seguinte URL 'http://backend.local/wp-json/jwt-auth/v1/token', no 'Header' verifique se existe 'Content-Type: application/json' e por ultimo envie as seguintes informações no 'Body':

```json
{
    "username": "seu_usuario",
    "password": "sua_senha"
}
```

Resposta esperada:

```json
{
    "token": "seu_token_aqui",
    "user_email": "seuemail@exemplo.com",
    "user_nicename": "seu_usuario",
    "user_display_name": "Seu Nome"
}
```

## Testando com Postman

Para testar a criação de um formulário:

1. Configure a URL: http://backend.local/wp-json/wp/v2/formulario

2. No método POST, adicione o header:
```json
{
    "Content-Type": "application/json",
    "Authorization": "Bearer {seu_token_jwt}"
}
```

3. No body (JSON), insira algo como:
```json
{
    "title": "Form Submission",
    "content": "",
    "acf": {
        "campo1": "Valor do Campo 1",
        "campo2": "Valor do Campo 2",
        "campo3": "Valor Opcional",
        "campo4": "Valor Opcional",
        "verificacaoResultado": "1055"
    }
}
```

# Dependências:

Certifique-se de que os plugins para WordPress necessários estão baixados e ativados:

- ACF to rest api

- Advanced custom fields 

- JWT authenticator for wp rest api

Para instalar os plugins acesse o WP Admin, selecione a opção 'Plugins' à esquerda, selecione 'Adicionar novo plugin' e busque pelos plugins acima, após instalados, selecione 'Plugins instalados' e os ative.