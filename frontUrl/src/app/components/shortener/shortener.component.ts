import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { ShortenServiceService } from 'src/app/shorten-service.service';
import { environment } from 'src/environments/environment';
import { faCopy,faDownload } from '@fortawesome/free-solid-svg-icons';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit{
  shortenerForm!: FormGroup; 
  originalUrl:string=''
  shortUrl:string=''
  qrCodeImage:string=''
  qrCodeDownloadLink!:SafeUrl
  fa={copy:faCopy,download:faDownload}
  constructor(private service:ShortenServiceService,private fb: FormBuilder,private clipboard: Clipboard){}
  ngOnInit(): void {
    this.shortenerForm = this.fb.group({
      originalUrl: ['', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)]],
    });
  }

  shortenUrl(){

    if(this.shortenerForm.valid){
      this.service.short(this.shortenerForm.get('originalUrl')?.value).subscribe((res:{original:string,shortId:string})=>{
        if(res){
          this.shortUrl=`${window.location.href}${res.shortId}`
        }
      })
    }
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
  copyToClipboard(){
    this.clipboard.copy(this.shortUrl);
  }
}
