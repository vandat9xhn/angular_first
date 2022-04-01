import { Injectable } from '@angular/core';

//
@Injectable()
export class useMountedInjector {
    mounted = false;

    handleMounted() {
        this.mounted = true;
    }

    handleUnmounted() {
        this.mounted = false;
    }
}
