export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-red'
  },
  {
    path: '/admin/ekonomi',
    title: 'Ekonomi',
    type: 'link',
    icontype: 'fas fa-chart-line text-red'
  },
  {
    path: '/admin/bajet-pembangunan',
    title: 'Bajet Pembangunan',
    type: 'link',
    icontype: 'fas fa-funnel-dollar text-red'
  },
  {
    path: '/admin/projek-fizikal',
    title: 'Projek Fizikal',
    type: 'link',
    icontype: 'fas fa-city text-red'
  },
  {
    path: '/admin/modal-insan',
    title: 'Modal Insan',
    type: 'link',
    icontype: 'fas fa-hand-holding-heart text-red'
  },
  {
    path: '/admin/aset-tanah',
    title: 'Aset Tanah',
    type: 'link',
    icontype: 'fas fa-gem text-red'
  },
  {
    path: '/admin/anak-syarikat',
    title: 'Anak Syarikat',
    type: 'link',
    icontype: 'fas fa-building text-red'
  },
  {
    path: '/admin/rpt-kkt',
    title: 'RPT & KKT',
    type: 'link',
    icontype: 'fas fa-users text-red'
  },
  {
    path: '/admin/kakitangan',
    title: 'Kakitangan',
    type: 'sub',
    icontype: 'fas fa-user-tie text-red',
    collapse: 'kakitangan',
    isCollapsed: true,
    children: [
      { path: 'profil', title: 'Profil Kakitangan', type: 'link' },
      { path: 'cuti', title: 'Cuti', type: 'link' },
      { path: 'kenderaan', title: 'Kenderaan', type: 'link' },
      { path: 'kursus-rawatan', title: 'Kursus dan Rawatan', type: 'link' },
    ]
  },
  {
    path: '/admin/gis',
    title: 'GIS',
    type: 'link',
    icontype: 'fas fa-globe-asia text-red'
  },
  {
    path: '/admin/management',
    title: 'Pengurusan',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-red',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Jejak Audit', type: 'link' },
      { path: 'user', title: 'Pengguna', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];