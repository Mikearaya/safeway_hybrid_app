import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { FeaturesDashboardComponent } from './features-dashboard/features-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: FeaturesDashboardComponent
      },
      {
        path: 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
      },
      {
        path: 'agencies',
        loadChildren: './agency/agency.module#AgencyModule'
      },
      {
        path: 'forums',
        loadChildren: './forums/forums.module#ForumsModule'
      },
      {
        path: 'hospitals',
        loadChildren: './hospitals/hospitals.module#HospitalsModule'
      },
      {
        path: 'schools',
        loadChildren: './schools/schools.module#SchoolsModule'
      },
      {
        path: 'emergency-contacts',
        loadChildren:
          './emergency-contacts/emergency-contacts.module#EmergencyContactsModule'
      },
      {
        path: 'news',
        loadChildren: './news/news.module#NewsModule'
      },
      {
        path: 'complains',
        loadChildren: './complains/complains.module#ComplainsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
