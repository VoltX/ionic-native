import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Sms Log
 * @description
 * This plugin access the sms history on a device and that can be filtered
 *
 * @usage
 * ```typescript
 * import { SmsLog } from '@ionic-native/sms-log';
 *
 *
 * constructor(private smsLog: SmsLog) { }
 *
 * ...
 *
 */
@Plugin({
  pluginName: 'SmsLog',
  plugin: 'cordova-plugin-smslog',
  pluginRef: 'plugins.smsLog',
  repo: 'https://github.com/creacore-team/cordova-plugin-smslog',
  platforms: ['Android']
})
@Injectable()
export class SmsLog extends IonicNativePlugin {

  /**
   * This function return the sms logs
   * @param filters {object[]} array of object to filter the query
   * Object must respect this structure {'name':'...', 'value': '...', 'operator': '=='}
   * (see https://github.com/creacore-team/cordova-plugin-smslog for more details)
   * @return {Promise<any>}
   */
  @Cordova()
  getSmsLog(filters: object[]): Promise<any> { return; }

  /**
   * Check permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  hasReadPermission(): Promise<any> { return; }

  /**
   * Request permission
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  requestReadPermission(): Promise<any> { return; }
}
