import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { video_config } from './scanner.const';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit, AfterViewInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild ('videoElement') video !: ElementRef<HTMLVideoElement>

  videoStream!: MediaStream;

  config = structuredClone(video_config);

  ngAfterViewInit(): void {
      this.preparaScan() 
    }

   async preparaScan(){
      const valida = this.checkCamera();
    }

    async startScanner(){
      this.videoStream = await navigator.mediaDevices.getUserMedia(this.config);
      this.video.nativeElement.srcObject = this.videoStream
    }

    async checkCamera(){
      const cameraPermissoes = await navigator.permissions.query({name:'camera'} as any)
      console.log(cameraPermissoes);  
      const taOk= cameraPermissoes.state !== "denied"; 

      const hasMediaDevice = 'mediaDevices' in navigator 
      const hasUserMedia = 'getUserMedia' in navigator.mediaDevices

      if (!hasMediaDevice || (!hasMediaDevice && taOk) ){

      }

    
    }
  
}
