import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: 'wikipedia',
    loadChildren: () => import('./wikipedia-searching-tool/wikipedia-searching-tool.module').then((m) => m.WikipediaSearchingToolModule)
  },
  {
    path: 'typing',
    loadChildren: () => import('./typing/typing.module').then((m) => m.TypingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
