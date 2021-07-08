import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'ekonomi',
                component: EkonomiComponent
            },
            {
                path: 'bajet-pembangunan',
                component: BajetPembangunanComponent
            },
            {
                path: 'projek-fizikal',
                component: ProjekFizikalComponent
            },
            {
                path: 'modal-insan',
                component: ModalInsanComponent
            },
            {
                path: 'aset-tanah',
                component: AsetTanahComponent
            },
            {
                path: 'anak-syarikat',
                component: AnakSyarikatComponent
            },
            {
                path: 'rpt-kkt',
                component: RptKktComponent
            },
            {
                path: 'kakitangan',
                children: [
                    {
                        path: 'profil',
                        component: KakitanganProfilComponent
                    },
                    {
                        path: 'cuti',
                        component: KakitanganCutiComponent
                    },
                    {
                        path: 'kenderaan',
                        component: KakitanganKenderaanComponent
                    },
                    {
                        path: 'kursus-rawatan',
                        component: KakitanganKursusRawatanComponent
                    }
                ]
            },
            {
                path: 'gis',
                component: GisComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]