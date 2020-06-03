// Blocks

enum Effects {
    //% block="high pitch"
    High = 1,
    //% block="low pitch"
    Low = 2,
    //% block="fade in"
    FadeIn = 3,
    //% block="fade out"
    FadeOut = 4,
    //% block="reverb"
    Reverb = 5,
    //% block="echo"
    Echo = 6,
    //% block="high pass"
    HighPass = 7,
    //% block="low pass"
    LowPass = 8
}

enum Events {
    //% block="loud"
    Loud = 1,
    //% block="quiet"
    Quiet = 2,
    //% block="clap"
    Clap = 3,
    //% block="double clap"
    Double_Clap = 4,
    //% block="wind"
    Wind = 5,
    //% block="happy"
    Happy = 6,
    //% block="sad"
    Sad = 7,
    //% block="yes"
    Yes = 8,
    //% block="no"
    No = 9,
    //% block="hello"
    Hello = 10,
    //% block="goodbye"
    Goodbye = 11,
    //% block="delighted"
    Delighted = 12,
    //% block="angry"
    Angry = 13,
    //% block="giggle"
    Giggle = 14,
    //% block="shy"
    Shy = 15,
    //% block="surprised"
    Surprised = 16,
    //% block="scared"
    Scared = 17,
    //% block="thinking"
    Thinking = 18,
    //%block="confused"
    Confused = 19,
    //% block="purr"
    Purr = 20
}

enum Emotions {
    Happy = 6,
    //% block="sad"
    Sad = 7,
    //% block="yes"
    Yes = 8,
    //% block="no"
    No = 9,
    //% block="hello"
    Hello = 10,
    //% block="goodbye"
    Goodbye = 11,
    //% block="delighted"
    Delighted = 12,
    //% block="angry"
    Angry = 13,
    //% block="giggle"
    Giggle = 14,
    //% block="shy"
    Shy = 15,
    //% block="surprised"
    Surprised = 16,
    //% block="scared"
    Scared = 17,
    //% block="thinking"
    Thinking = 18,
    //%block="confused"
    Confused = 19,
    //% block="purr"
    Purr = 20
}

enum Sound_level {
    //% block="high"
    High = 1,
    //% block="medium"
    Medium = 2,
    //% block="low"
    Low = 3
}

enum Rhythms {
    //% block="simple"
    Simple = 1,
    //% block="compound"
    Triple = 2,
    //% block="swung"
    Squng = 3,
    //% block="syncopated"
    Syncopated = 4
}

namespace music {
    //% groups="['Melody Advanced']"

    //% blockId=device_builtin_emotion block="%emotion"
    //% blockHidden=true
    export function builtInEmoji(emotion: Emotions): string[] {
        return [];
    }

    //% block="play sound %melody=device_builtin_emotion| "
    //% group="Melody Advanced"
    export function playSound(melodyArray: string[]) {

    }

    //% block="apply effect %options| to %melody=device_builtin_emotion| "
    //% group="Melody Advanced"
    export function applyEffect(options: Effects = 1, melodyArray: string[]) {
        return 0;
    }
}


namespace input {

    //% block="on facepin pressed"
    export function onFacepinPressed(handler: () => void) {

    }

    //% block="on facepin released"
    //% advanced=true
    export function onFacepinReleased(handler: () => void) {

    }

    //% block="facepin is pressed"
    export function facepinBoolean(): boolean {
        return false;
    }

    //% block="on %soundevent| event "
    //% subcategory=microphone
    export function onSoundEvent(soundemoji: Events, body: () => void) {
    }

    //% block="get sound level"
    //% subcategory=microphone
    export function getSoundLevel() {
        return 0;
    }


    //% block="set $event event threshold to $level"
    //% subcategory=microphone
    //% level.min=0 level.max=255 level.defl=128
    export function setThreshold(event: Events, level: number): void {

    }

    //% block="get $event event threshold"
    //% subcategory=microphone
    export function getThreshold(event: Events) {
        return 0;
    }


    export class Variable {

        //% block="record to %clip1 for $duration s"
        //% subcategory=microphone
        //% duration.min=0.5 duration.max=4 duration.defl=3
        public record(duration: number) {

        }
    }

    //% block="on %note=device_note|" 
    //% subcategory=microphone
    export function onNote(frequency: number, body: () => void) {

    }

    //% block="audio frequency (Hz)"
    //% subcategory=microphone
    export function getFrequency() {
        return 0;
    }

    //%block="find nearest note"
    //% subcategory=microphone
    export function findNearestNote() {
        return 0;
    }

    /* export class Rhythm {
         //% block="on %simple| rhythm"
         //% subcategory=microphone
         public onRhythm(body: () => void) {
         }
     }
 
     //% block="on %rhythm| rhythm "
     //% subcategory=microphone
     export function onSetRhythm(rhythm: Rhythms, body: () => void){
     }
     */
} 