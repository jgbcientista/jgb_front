import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },

  {
    path: 'landing-page',
    loadChildren: () => import('./pages/application/example-landing-page/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/application/example-crud/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/application/example-news/news.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./pages/application/example-news-form/news-form.module')
      .then(mod => mod.NewsFormModule)
  },
  {
    path: 'boxoffice',
    loadChildren: () => import('./pages/application/example-boxoffice/boxoffice.module')
      .then(mod => mod.BoxofficeModule)
  },
  {
    path: 'boxoffice/:id',
    loadChildren: () => import('./pages/application/example-boxoffice-form/boxoffice-form.module')
      .then(mod => mod.BoxofficeFormModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/application/example-modal/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prism',
    loadChildren: () => import('./pages/application/example-prism/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'prettyjson',
    loadChildren: () => import('./pages/application/example-prettyjson/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/application/example-cards/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./pages/application/example-items/items.module')
      .then(mod => mod.ItemsModule)
  },  
  {
    path: 'bootstrap',
    loadChildren: () => import('./pages/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./pages/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/application/example-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/cadastros/usuario/login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pages/cadastros/usuario/cadastro-usuario/usuario.module')
      .then(mod => mod.UsuarioModule)
  },
    
     // configuracao do fornecedor
      {
        path: 'list-fornecedor',
        loadChildren: () => import('./pages/cadastros/fornecedor/fornecedor.module')
          .then(mod => mod.FornecedorModule)
      },
      {
        path: 'create-fornecedor',
        loadChildren: () => import('./pages/cadastros/fornecedor/create/create.module')
          .then(mod => mod.CreateFornecedorModule)
      },
      {
        path: 'fornecedor/:postId/view',
        loadChildren: () => import('./pages/cadastros/fornecedor/view/view.module')
          .then(mod => mod.ViewFornecedorModule)
      },
      {
        path: 'fornecedor/:postId/edit',
        loadChildren: () => import('./pages/cadastros/fornecedor/edit/edit.module')
          .then(mod => mod.EditFornecedorModule)
      },
	  
    
     // configuracao do cliente
      {
        path: 'list-cliente',
        loadChildren: () => import('./pages/cadastros/cliente/cliente.module')
          .then(mod => mod.ClienteModule)
      },
      {
        path: 'create-cliente',
        loadChildren: () => import('./pages/cadastros/cliente/create/create.module')
          .then(mod => mod.CreateClienteModule)
      },
      {
        path: 'cliente/:postId/view',
        loadChildren: () => import('./pages/cadastros/cliente/view/view.module')
          .then(mod => mod.ViewClienteModule)
      },
      {
        path: 'cliente/:postId/edit',
        loadChildren: () => import('./pages/cadastros/cliente/edit/edit.module')
          .then(mod => mod.EditClienteModule)
      },
  
  
     // configuracao do patrimonio
      {
        path: 'list-patrimonio',
        loadChildren: () => import('./pages/cadastros/patrimonio/patrimonio.module')
          .then(mod => mod.PatrimonioModule)
      },
      {
        path: 'create-patrimonio',
        loadChildren: () => import('./pages/cadastros/patrimonio/create/create.module')
          .then(mod => mod.CreatePatrimonioModule)
      },
      {
        path: 'patrimonio/:postId/view',
        loadChildren: () => import('./pages/cadastros/patrimonio/view/view.module')
          .then(mod => mod.ViewPatrimonioModule)
      },
      {
        path: 'patrimonio/:postId/edit',
        loadChildren: () => import('./pages/cadastros/patrimonio/edit/edit.module')
          .then(mod => mod.EditPatrimonioModule)
      },


      // configuracao do perfil
      {
        path: 'list-perfil',
        loadChildren: () => import('./pages/cadastros/perfil/perfil.module')
          .then(mod => mod.PerfilModule)
      },
      {
        path: 'create-perfil',
        loadChildren: () => import('./pages/cadastros/perfil/create/create.module')
          .then(mod => mod.CreatePerfilModule)
      },
      {
        path: 'perfil/:postId/view',
        loadChildren: () => import('./pages/cadastros/perfil/view/view.module')
          .then(mod => mod.ViewPerfilModule)
      },
      {
        path: 'perfil/:postId/edit',
        loadChildren: () => import('./pages/cadastros/perfil/edit/edit.module')
          .then(mod => mod.EditPerfilModule)
      },

    // configuracao da funcao profissional
    {
      path: 'list-funcao',
      loadChildren: () => import('./pages/cadastros/funcao/funcao.module')
        .then(mod => mod.FuncaoModule)
    },
    {
      path: 'create-funcao',
      loadChildren: () => import('./pages/cadastros/funcao/create/create.module')
        .then(mod => mod.CreateFuncaoModule)
    },
    {
      path: 'funcao/:postId/view',
      loadChildren: () => import('./pages/cadastros/funcao/view/view.module')
        .then(mod => mod.ViewFuncaoModule)
    },
    {
      path: 'funcao/:postId/edit',
      loadChildren: () => import('./pages/cadastros/funcao/edit/edit.module')
        .then(mod => mod.EditFuncaoModule)
    },


  // configuracao de produto
  {
    path: 'list-pessoa',
    loadChildren: () => import('./pages/cadastros/pessoa/pessoa.module')
      .then(mod => mod.PessoaModule)
  },
  {
    path: 'create-pessoa',
    loadChildren: () => import('./pages/cadastros/pessoa/create/create.module')
      .then(mod => mod.CreatePessoaModule)
  },
  {
    path: 'pessoa/:postId/view',
    loadChildren: () => import('./pages/cadastros/pessoa/view/view.module')
      .then(mod => mod.ViewPessoaModule)
  },
  {
    path: 'pessoa/:postId/edit',
    loadChildren: () => import('./pages/cadastros/pessoa/edit/edit.module')
      .then(mod => mod.EditPessoaModule)
  },

    // configuracao de produto
    {
      path: 'list-produto',
      loadChildren: () => import('./pages/cadastros/produto/produto.module')
        .then(mod => mod.ProdutoModule)
    },
    {
      path: 'create-produto',
      loadChildren: () => import('./pages/cadastros/produto/create/create.module')
        .then(mod => mod.CreateProdutoModule)
    },
    {
      path: 'produto/:postId/view',
      loadChildren: () => import('./pages/cadastros/produto/view/view.module')
        .then(mod => mod.ViewProdutoModule)
    },
    {
      path: 'produto/:postId/edit',
      loadChildren: () => import('./pages/cadastros/produto/edit/edit.module')
        .then(mod => mod.EditProdutoModule)
    },

    // configuracao de servico
    {
      path: 'list-servico',
      loadChildren: () => import('./pages/cadastros/servico/servico.module')
        .then(mod => mod.ServicoModule)
    },
    {
      path: 'create-servico',
      loadChildren: () => import('./pages/cadastros/servico/create/create.module')
        .then(mod => mod.CreateServicoModule)
    },
    {
      path: 'servico/:postId/view',
      loadChildren: () => import('./pages/cadastros/servico/view/view.module')
        .then(mod => mod.ViewServicoModule)
    },
    {
      path: 'servico/:postId/edit',
      loadChildren: () => import('./pages/cadastros/servico/edit/edit.module')
        .then(mod => mod.EditServicoModule)
    },
 


  // configuracao de servico
  {
    path: 'list-post',
    loadChildren: () => import('./pages/cadastros/post/post.module')
      .then(mod => mod.PostModule)
  },
  {
    path: 'create-post',
    loadChildren: () => import('./pages/cadastros/post/create/create.module')
      .then(mod => mod.CreatePostModule)
  },

  {
    path: 'post/:postId/view',
    loadChildren: () => import('./pages/cadastros/post/view/view.module')
      .then(mod => mod.ViewPostModule)
  },

  {
    path: 'post/:postId/edit',
    loadChildren: () => import('./pages/cadastros/post/edit/edit.module')
      .then(mod => mod.EditPostModule)
  },


  

  {
    path: 'contact',
    loadChildren: () => import('./pages/cadastros/contact/contact.module')
      .then(mod => mod.ContactModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./pages/cadastros/about/about.routes').then(routes => routes.routes)
  },

  { path: '**', component: NotFoundComponent }
];
