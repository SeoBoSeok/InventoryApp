import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FIREBASE_CONFIG } from '../../app/firebasecreditials';

@Injectable()
export class GoogleCloudVisionServiceProvider {
  constructor(public http: Http) { }
  getLabels(base64Image) {
    const body = {
      "requests": [
        {
          "image": {
            "content": base64Image
          },
          "features": [
            {
              "type": "LABEL_DETECTION"
            }
          ]
        }
      ]
    }
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + FIREBASE_CONFIG.googleCloudVisionAPIKey, body);
  }
}