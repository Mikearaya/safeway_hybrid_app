/*
 * @CreateTime: Mar 15, 2019 8:33 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Mar 15, 2019 8:43 PM
 * @Description: Modify Here, Please
 */

export interface ComplainTypeModel {
  ID?: number;
  type: string;
}

export interface ComplainModel {
  ID?: number;
  barcode?: string;
  passport_id?: string;
  complain: string;
  COMPLAIN_TYPE: number;
}

export interface ComplainTypeViewModel {
  ID?: number;
  type: string;
  date_added: Date;
  date_updated: Date;
}

export interface ComplainViewModel {
  ID?: number;
  barcode?: string;
  passport_id?: string;
  complain: string;
  COMPLAIN_TYPE: number;
  date_added: Date;
  date_updated: Date;
}
