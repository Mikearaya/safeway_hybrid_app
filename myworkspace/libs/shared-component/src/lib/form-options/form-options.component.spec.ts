/*
 * @CreateTime: Sep 6, 2018 4:49 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Sep 6, 2018 4:49 PM
 * @Description: Modify Here, Please
 */

import { FormOptionsComponent } from './form-options.component';
import { Location } from '@angular/common';

class MockLocation {
  back(): void {}
}
describe('FormOptionsComponent', () => {
  let locationService: Location;

  let component: FormOptionsComponent;

  beforeEach(() => {
    locationService = jasmine.createSpyObj(['back']);
    component = new FormOptionsComponent(locationService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
