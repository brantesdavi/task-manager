import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowRight, faArrowUp, faBars, faCalendarDay, faCalendarDays, faCar, faChartPie, faChevronDown, faChevronLeft, faChevronRight, faDollarSign, faFileInvoiceDollar, faFolder, faGamepad, faGaugeHigh, faGlobe, faGraduationCap, faHouse, faMask, faObjectUngroup, faPiggyBank, faPizzaSlice, faShirt, faSpinner, faSquarePlus, faUser, faUsers, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule]
})
export class IconsModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(
      faBars,
      faGaugeHigh,
      faFolder,
      faUsers
    );
  }
}
