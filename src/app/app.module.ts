import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Toast, ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { HomeComponent } from './pages/home/home.component';
import { SeleccionPartidaComponent } from './pages/seleccion-partida/seleccion-partida.component';
import { DetallesTorneoComponent } from './pages/detalles-torneo/detalles-torneo.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PartidaComponent } from './pages/partida/partida.component';
import { PartidaDetalleComponent } from './pages/partida-detalle/partida-detalle.component';
import { BuscarScrimComponent } from './pages/buscar-scrim/buscar-scrim.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RegistroFinalComponent } from './pages/registro-final/registro-final.component';
import { RegistroCompletaRegistroComponent } from './pages/registro-completa-registro/registro-completa-registro.component';

import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { LfmComponent } from './pages/lfm/lfm.component';
import { VolverComponent } from './pages/volver/volver.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { TeamCreateComponent } from './pages/team-create/team-create.component';
import { NewTeamComponent } from './pages/new-team/new-team.component';
import { NoTeamComponent } from './pages/no-team/no-team.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { CrearEquipoComponent } from './pages/crear-equipo/crear-equipo.component';
import { NOequipoComponent } from './pages/noequipo/noequipo.component';
import { EquipoCreadoComponent } from './pages/equipo-creado/equipo-creado.component';
import { AdminToolsComponent } from './pages/admin-tools/admin-tools.component';
import { AdminCreateComponent } from './pages/admin-create/admin-create.component';
import { CrearAdminComponent } from './pages/crear-admin/crear-admin.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ChatComponent } from './pages/chat/chat.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { ListaChatsComponent } from './pages/lista-chats/lista-chats.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { RegistroFavComponent } from './pages/registro-fav/registro-fav.component';
import { NormasTorneoComponent } from './pages/normas-torneo/normas-torneo.component';
import { InfoEquipoPersonalComponent } from './pages/info-equipo-personal/info-equipo-personal.component';
import { InfoEquipoPublicoComponent } from './pages/info-equipo-publico/info-equipo-publico.component';
import { InfoUsuarioPersonalComponent } from './pages/info-usuario-personal/info-usuario-personal.component';
import { InfoUsuarioPublicoComponent } from './pages/info-usuario-publico/info-usuario-publico.component';
import { AdjustComponent } from './pages/adjust/adjust.component';
import { TermsComponent } from './pages/terms/terms.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAdminComponent,
    TorneosComponent,
    HomeComponent,
    SeleccionPartidaComponent,
    DetallesTorneoComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PartidaComponent,
    PartidaDetalleComponent,
    BuscarScrimComponent,
    LoginComponent,
    RegistroComponent,
    RegistroFinalComponent,
    RegistroCompletaRegistroComponent,
    LfmComponent,
    VolverComponent,
    SideBarComponent,
    EquiposComponent,
    AdminCreateComponent,
    AdminToolsComponent,
    AlertsComponent,
    TeamCreateComponent,
    NewTeamComponent,
    NoTeamComponent,
    MenuComponent,
    ChatComponent,
    CrearEquipoComponent,
    RankingComponent,
    NOequipoComponent,
    EquipoCreadoComponent,
    AdminToolsComponent,
    AdminCreateComponent,
    PartidaComponent,
    PartidaDetalleComponent,
    BuscarScrimComponent,
    ListaChatsComponent,
    CreateTournamentComponent,
    RegistroFavComponent,
    NormasTorneoComponent,
    InfoEquipoPersonalComponent,
    InfoEquipoPublicoComponent,
    InfoUsuarioPersonalComponent,
    InfoUsuarioPublicoComponent,
    AdjustComponent,
    TermsComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      closeButton: true,
      progressBar: true,
      preventDuplicates:true,
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
