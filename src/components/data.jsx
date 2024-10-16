const midiCC = [
    "0 Bank Select (MSB)",
    "1 Modulation Wheel",
    "2 Breath controller",
    "3 Undefined",
    "4 Foot Pedal (MSB)",
    "5 Portamento Time (MSB)",
    "6 Data Entry (MSB)",
    "7 Volume (MSB)",
    "8 Balance (MSB)",
    "9 Undefined",
    "10 Pan position (MSB)",
    "11 Expression (MSB)",
    "12 Effect Control 1 (MSB)",
    "13 Effect Control 2 (MSB)",
    "14 Undefined",
    "15 Undefined",
    "16 General Purpose 1",
    "17 General Purpose 2",
    "18 General Purpose 3",
    "19 General Purpose 4",
    "20 Undefined",
    "21 Undefined",
    "22 Undefined",
    "23 Undefined",
    "24 Undefined",
    "25 Undefined",
    "26 Undefined",
    "27 Undefined",
    "28 Undefined",
    "29 Undefined",
    "30 Undefined",
    "31 Undefined",
    "32 Controller 0",
    "33 Controller 1",
    "34 Controller 2",
    "35 Controller 3",
    "36 Controller 4",
    "37 Controller 5",
    "38 Controller 6",
    "39 Controller 7",
    "40 Controller 8",
    "41 Controller 9",
    "42 Controller 10",
    "43 Controller 11",
    "44 Controller 12",
    "45 Controller 13",
    "46 Controller 14",
    "47 Controller 15",
    "48 Controller 16",
    "49 Controller 17",
    "50 Controller 18",
    "51 Controller 19",
    "52 Controller 20",
    "53 Controller 21",
    "54 Controller 22",
    "55 Controller 23",
    "56 Controller 24",
    "57 Controller 25",
    "58 Controller 26",
    "59 Controller 27",
    "60 Controller 28",
    "61 Controller 29",
    "62 Controller 30",
    "63 Controller 31",
    "64 Hold Pedal (on/off)",
    "65 Portamento (on/off)",
    "66 Sostenuto Pedal (on/off)",
    "67 Soft Pedal (on/off)",
    "68 Legato Pedal (on/off)",
    "69 Hold 2 Pedal (on/off)",
    "70 Sound Variation",
    "71 Resonance (Timbre)",
    "72 Sound Release Time",
    "73 Sound Attack Time",
    "74 Frequency Cutoff (Brightness)",
    "75 Sound Control 6",
    "76 Sound Control 7",
    "77 Sound Control 8",
    "78 Sound Control 9",
    "79 Sound Control 10",
    "80 Decay or General Purpose Button 1 (on/off) Roland Tone level 1",
    "81 Hi Pass Filter Frequency or General Purpose Button 2 (on/off) Roland Tone level 2",
    "82 General Purpose Button 3 (on/off) Roland Tone level 3",
    "83 General Purpose Button 4 (on/off) Roland Tone level 4",
    "84 Portamento Amount",
    "85 Undefined",
    "86 Undefined",
    "87 Undefined",
    "88 Undefined",
    "89 Undefined",
    "90 Undefined",
    "91 Reverb Level",
    "92 Tremolo Level",
    "93 Chorus Level",
    "94 Detune Level",
    "95 Phaser Level",
    "96 Data Button increment",
    "97 Data Button decrement",
    "98 Non-registered Parameter (LSB)",
    "99 Non-registered Parameter (MSB)",
    "100 Registered Parameter (LSB)",
    "101 Registered Parameter (MSB)",
    "102 Undefined",
    "103 Undefined",
    "104 Undefined",
    "105 Undefined",
    "106 Undefined",
    "107 Undefined",
    "108 Undefined",
    "109 Undefined",
    "110 Undefined",
    "111 Undefined",
    "112 Undefined",
    "113 Undefined",
    "114 Undefined",
    "115 Undefined",
    "116 Undefined",
    "117 Undefined",
    "118 Undefined",
    "119 Undefined",
    "120 All Sound Off",
    "121 All Controllers Off",
    "122 Local Keyboard (on/off)",
    "123 All Notes Off",
    "124 Omni Mode Off",
    "125 Omni Mode On",
    "126 Mono Operation",
    "127 Poly Mode"
];

const midiValRange = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127
];

export const globalState = {
    buttons: [{
        name: 'chorus',
        colorOn: [255, 255, 255],
        colorOff: [0, 0, 0],
        action: 'click',
        state: 'on',
        type: 'latch',
        sequence: 'off',
        midiType: 'CC'
    }, {
        name: 'delay',
        colorOn: [200, 200, 200],
        colorOff: [0, 0, 0],
        action: 'press',
        state: 'off',
        type: 'momentary',
        sequence: 'off',
        midiType: 'CC'
    }],
    wifiName: 'FRITZBox',
    wifiPasswd: '12345678'
};

const dropdowns = [
    {
        name: 'On',
        opt: ['Click', 'Press', 'Release', 'Long press']
    },
    {
        name: 'Send',
        opt: [
            'Note On', 'Note Off', 'Control Change',
            'Program Change', 'Tap Tempo', 'Pitch Bend',
            'Aftertouch (Channel pressure)', 'none'
        ]
    },
    {
        name: 'Control Change',
        opt: midiCC
    },
    {
        name: 'CC value',
        opt: midiValRange
    },
    {
        name: 'MIDI Channel',
        opt: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    // {
    //     name: 'Program Change',
    //     opt: midiValRange
    // },
    // {
    //     name: 'PC value',
    //     opt: midiValRange
    // }
];

const colors = [
    { name: 'Color On' },
    { name: 'Color Off' }
]

export const panelsData = [
    {
        panelId: 'Button 0: Delay',
        note: "Clean tone + delay - crisp and clear for intros",
        dropdowns,
        colors
    },
    {
        panelId: 'Button 1: Lead',
        note: "Crunch rhythm - perfect for punchy riffs with attitude",
        dropdowns,
        colors
    },
    {
        panelId: 'Button 2: Clean',
        note: "Lead solo - searing highs that cut through the mix",
        dropdowns,
        colors
    },
    {
        panelId: 'Button 3: Loop',
        note: "Heavy distortion - raw power for metal and hard rock",
        dropdowns,
        colors
    },
    {
        panelId: 'Button 4: Reverb',
        note: "Ambient reverb - dreamy echoes for atmospheric soundscapes",
        dropdowns,
        colors
    },
    {
        panelId: 'Button 5: Octaver',
        note: "Warm blues - soulful and rich, ideal for expressive bends",
        dropdowns,
        colors
    },
];