import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { environment } from 'src/environments/environment';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = environment.mapbox.accessToken

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { EkonomiComponent } from './ekonomi/ekonomi.component';
import { BajetPembangunanComponent } from './bajet-pembangunan/bajet-pembangunan.component';
import { ProjekFizikalComponent } from './projek-fizikal/projek-fizikal.component';
import { ModalInsanComponent } from './modal-insan/modal-insan.component';
import { AsetTanahComponent } from './aset-tanah/aset-tanah.component';
import { AnakSyarikatComponent } from './anak-syarikat/anak-syarikat.component';
import { RptKktComponent } from './rpt-kkt/rpt-kkt.component';
import { KakitanganProfilComponent } from './kakitangan-profil/kakitangan-profil.component';
import { KakitanganCutiComponent } from './kakitangan-cuti/kakitangan-cuti.component';
import { KakitanganKenderaanComponent } from './kakitangan-kenderaan/kakitangan-kenderaan.component';
import { KakitanganKursusRawatanComponent } from './kakitangan-kursus-rawatan/kakitangan-kursus-rawatan.component';
import { GisComponent } from './gis/gis.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    EkonomiComponent,
    BajetPembangunanComponent,
    ProjekFizikalComponent,
    ModalInsanComponent,
    AsetTanahComponent,
    AnakSyarikatComponent,
    RptKktComponent,
    KakitanganProfilComponent,
    KakitanganCutiComponent,
    KakitanganKenderaanComponent,
    KakitanganKursusRawatanComponent,
    GisComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
