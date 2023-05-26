import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikipediaSearchingToolComponent } from './wikipedia-searching-tool/wikipedia-searching-tool.component';

const routes: Routes = [
  {
    path: '',
    component: WikipediaSearchingToolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikipediaSearchingToolRoutingModule { }
