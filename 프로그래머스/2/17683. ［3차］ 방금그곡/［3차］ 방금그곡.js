function change(str) {
    return str
        .replaceAll("C#", "1")
        .replaceAll("D#", "2")
        .replaceAll("F#", "3")
        .replaceAll("G#", "4")
        .replaceAll("A#", "5")
        .replaceAll("B#", "6");
}

function solution(m, musicinfos) {
    musicinfos = musicinfos.map((e) => e.split(","));
    const info = [];
    const a = [
        "C",
        "C#",
        "D",
        " D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
    ];
    const obj = {};
    m = change(m);

    for (let [s, e, title, melody] of musicinfos) {
        s = s.split(":").map((e) => Number(e));
        e = e.split(":").map((e) => Number(e));
        let runningTime = (e[0] - s[0]) * 60 + (e[1] - s[1]);
        if (runningTime < m.length) continue;
        melody = change(melody);
        let diff = runningTime - melody.length;

        let temp;
        temp = melody;
        temp = temp.split("");
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                const j = i % melody.length;
                melody += melody[j];
            }
        } else if (diff < 0) {
            temp.splice(temp.length + diff);
            melody = temp.join("");
        }
        for (let i = 0; i < melody.length; i++) {
            if (m[0] === melody[i]) {
                let flag = 1;
                for (let j = 1; j < m.length; j++) {
                    if (m[j] !== melody[i + j]) {
                        flag = 0;
                        break;
                    }
                }
                if (flag && melody[i + m.length] !== "#") {
                    info.push([title, runningTime]);
                    break;
                }
            }
        }
    }
    if (info.length) {
        let max = info[0];
        for (let i = 1; i < info.length; i++) {
            if (max[1] < info[i][1]) {
                max = info[i];
            }
        }
        return max[0];
    }
    return "(None)";
}