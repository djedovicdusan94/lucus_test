import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Page2Service } from 'src/app/_services/page2/page2.service';

@Component({
  selector: 'app-page2-home',
  templateUrl: './page2-home.component.html',
  styleUrls: ['./page2-home.component.scss'],
})
export class Page2HomeComponent implements OnInit {
  images: any[] = [];

  constructor(private lightbox: Lightbox, private page2Service: Page2Service) {
  }

  onTerm(term: string) {
    this.page2Service.getUnsplashData(term).subscribe((response: any) => {
      console.log(response);
      this.images = [];
      for (let i = 0; i < response['results'].length; i++) {
        const src = `${response['results'][i]['urls']['regular']}`;
        const caption = `${response['results'][i]['alt_description']}`;
        const thumb = `${response['results'][i]['urls']['small']}`;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb,
        };

        this.images.push(album);
      }
    });
  }

  ngOnInit(): void {
    this.onTerm("space");
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
}
