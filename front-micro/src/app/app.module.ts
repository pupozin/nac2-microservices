import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa o HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Adiciona o HttpClientModule aqui
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
