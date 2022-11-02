
// list of APIS
var apis = [
  {
    name: 'BoosterOrch',
    url: './openapi-3.0/booster_orch_openapi3.0.yml'
  },
  {
    name: 'CartMgmt',
    url: './openapi-3.0/cart_mgmt_openapi3.0.yml'
  },
  {
    name: 'CatalougeMgmt',
    url: './openapi-3.0/catalogue_mgmt_openapi3.0.yml'
  },
  {
    name: 'CerillionTranslation',
    url: './openapi-3.0/cerillion_translation_openapi3.0.yml'
  },
  {
    name: 'Communication',
    url: './openapi-3.0/communication_openapi3.0.yml'
  },
  {
    name: 'FaultMgmt',
    url: './openapi-3.0/fault_mgmt_openapi3.0.yml'
  },
  {
    name: 'i3',
    url: './openapi-3.0/i3_openapi3.0.yml'
  },
  {
    name: 'ProductOrder',
    url: './openapi-3.0/product_order_openapi3.0.yml'
  },
  {
    name: 'Session',
    url: './openapi-3.0/session_openapi3.0.yml'
  },
  {
    name: 'Zendesk',
    url: './openapi-3.0/zendesk_openapi3.0.yml'
  },
 {
   name: 'Wrapper',
   url: './openapi-3.0/wrapper_openapi3.0.yml'
 }
];

// initially render first API
Redoc.init(apis[0].url);

function onClick() {
  var url = this.getAttribute('data-link');
  Redoc.init(url);
}


// dynamically building navigation items
var $list = document.getElementById('links_container');
apis.forEach(function (api) {
  var $listitem = document.createElement('li');
  $listitem.setAttribute('data-link', api.url);
  $listitem.innerText = api.name;
  $listitem.addEventListener('click', onClick);
  $list.appendChild($listitem);
});
