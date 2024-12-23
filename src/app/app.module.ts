import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Si vous utilisez des formulaires réactifs
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthserviceService } from './authservice.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Utilisé pour les formulaires réactifs
    HttpClientModule // Ajout de HttpClientModule pour les requêtes HTTP
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
