function getData(){
    let monday = {
        deadLift: {
            title: 'Deadlift',
            text:
                [
                    {content: `First approach with 50 kg 10 repetitions`},
                    {content: `Second approach with 40 kg 15 repetitions`},
                    {content: `Third approach with 35 kg 12 repetitions`},
                    {content: `Fourth approach with 35 kg 12 repetitions`},
                ],
            photo:
                [
                    {src: `./img/deadlift1.png`},
                    {src: `./img/deadlift2.png`},
                    {src: `./img/deadlift3.png`},
                    {src: `./img/deadlift4.png`},
                ]
        },
        pullUps: {
            title: `Pull-ups & Chin-ups`,
            text:
                [
                    {content: `First approach 10 repetitions`},
                    {content: `Second approach 15 repetitions`},
                    {content: `Third approach  12 repetitions`},
                    {content: `Fourth approach 12 repetitions`},
                ],
            photo:
                [
                    {src: `./img/pullups1.png`},
                    {src: `./img/pullups2.png`},
                    {src: `./img/pullups3.png`},
                    {src: `./img/pullups4.png`},
                ]
        },
    }
    let tuesday = {
        barbel: {
            title: 'Barbell squats',
            text: [
                {content: `First approach with 50 kg 10 repetitions`},
                {content: `Second approach with 40 kg 15 repetitions`},
                {content: `Third approach with 35 kg 12 repetitions`},
                {content: `Fourth approach with 35 kg 12 repetitions`},
            ],
            photo: [
                {src: `./img/deadlift1.png`},
                {src: `./img/deadlift2.png`},
                {src: `./img/deadlift3.png`},
                {src: `./img/deadlift4.png`},
            ]
        },
        dumbbell: {
            title: `Dumbbell lunges`,
            text: [
                {content: `First approach 10 repetitions`},
                {content: `Second approach 15 repetitions`},
                {content: `Third approach  12 repetitions`},
                {content: `Fourth approach 12 repetitions`},
            ],
            photo: [
                {src: `./img/pullups1.png`},
                {src: `./img/pullups2.png`},
                {src: `./img/pullups3.png`},
                {src: `./img/pullups4.png`},
            ]
        },
    }
    let dataArray = [monday, tuesday]
    return dataArray;
}