function getRandNum(num) {
    return Math.floor(Math.random()*num)
}
const helpfulVerses = {
    fearful: ['Psalm 138:3', 'Psalm 121:1-8', 'Psalm 91:1-16', 'Ephesians 6:10-13'],
    doubtingSalvation: ['John 3:16', '1 John 5:11-13'],
    loosingFaith: ['1 Peter 1:5', 'Philippians 1:6'],
    financialNeed: ['Psalm 34:10', 'Philippians 4:19'],
    forgiveness: ['Hebrews 4:15-16', '1 John 1:9'],
    guidance: ['Proverbs 3:5-6', 'James 1:5'],
    lonely: ['Psalm 34:10', 'Hebrews 13:5'],
    inPain: ['Matthew 11:28'],
    needPatience: ['Romans 8:28-29', 'James 1:24'],
    stressed: ['John 14:27', 'John 16:33', 'Philippians 4:6-7'],
    prideful: ['1 Corinthians 4:7', 'Philippians 2:3-8'],
    burdened: ['1 Peter 5:7', 'Psalm 55:22'], 
    needRest: ['Matthew 11:28', 'Galatians 6:9'],
    feelSelfish: ['Philipians 4:8', '1 John 2:15-17'],
    sad: ['2 Corinthians 1:3-5', 'Romans 8:26-28'],
    suffering: ['2 Corinthians 4:17', 'Psalm 34:19'],
    tempted: ['1 Corinthians 10:13', 'James 1:24', 'James 1:12-15'],
    treatedUnfair: ['1 Peter 4:12-15', '1 Peter 2:19-23'],
    weakInadequate: ['2 Corinthians 12:9-10', 'Philippians 4:13']

}
let needHelp = []

for (let verse in helpfulVerses) {
    let userChoice = getRandNum (helpfulVerses[verse].length)

    switch (verse) {
        case 'fearful':
            needHelp.push(`When you are affraid, read ${helpfulVerses[verse][userChoice]} to gain peace in the Lord.`)
            break
        case 'doubtingSalvation':
            needHelp.push(`When you doubt your salvation, read ${helpfulVerses[verse][userChoice]} for security.`)
            break
        case 'loosingFaith':
            needHelp.push(`When you feel you are loosing faith in God, read ${helpfulVerses[verse][userChoice]}.`)
            break
        case 'financialNeed':
            needHelp.push(`When you find yourself in financial need, read  ${helpfulVerses[verse][userChoice]} for guidance.`)
            break
        case 'forgiveness':
            needHelp.push(`When you need forgiveness for your sins, read  ${helpfulVerses[verse][userChoice]}.`)
            break
        case 'guidance':
            needHelp.push(`When you need guidance for the road ahead, read  ${helpfulVerses[verse][userChoice]} to find Gods map.`)
            break
        case 'lonely':
            needHelp.push(`When you feel lonely or depressed, read  ${helpfulVerses[verse][userChoice]} and know that you are never alone.`)
            break
        case 'inPain':
            needHelp.push(`When you are in spirtual or emotional pain, read  ${helpfulVerses[verse][userChoice]} to get some relief.`)
            break
        case 'needPatience':
            needHelp.push(`When your patience is nearing its end, read  ${helpfulVerses[verse][userChoice]} for a refill.`)
            break
        case 'stressed':
            needHelp.push(`When the stresses of life are weighing you down, read  ${helpfulVerses[verse][userChoice]}.`)
            break
        case 'prideful':
            needHelp.push(`When you are full of unrighteous pride, read  ${helpfulVerses[verse][userChoice]}.`)
            break
        case 'burdened':
            needHelp.push(`When you are burdened by the things of this world, read  ${helpfulVerses[verse][userChoice]} and lay your burdens down.`)
            break
        case 'needRest':
            needHelp.push(`When your soul is in need of rest, read  ${helpfulVerses[verse][userChoice]}.`)
            break
        case 'feelSelfish':
            needHelp.push(`When you find yourself feeling selfish, read  ${helpfulVerses[verse][userChoice]}.`)
            break
        case 'sad':
            needHelp.push(`When you are feeling sad, read  ${helpfulVerses[verse][userChoice]} and remember, too, even Jesus wept.`)
            break
        case 'suffering':
            needHelp.push(`When you are suffering in your heart, mind, spirit, or body, read  ${helpfulVerses[verse][userChoice]}.`)
            break
        case 'tempted':
            needHelp.push(`When you are tempted to sin, read  ${helpfulVerses[verse][userChoice]} and walk away from the temptation`)
            break
        case 'treatedUnfair':
            needHelp.push(`When the world treats you unfairly, read  ${helpfulVerses[verse][userChoice]} and know that they hung Jesus on a cross unfairly, too.`)
            break
        case 'weakInadequate':
            needHelp.push(`When you feel too weak or inadequate to do what God has called you to do, read  ${helpfulVerses[verse][userChoice]} and remember, if God has called you to it, He will help you do it.`)
            break
        default:
            needHelp.push('Response not found')
    }
}
function formatVerses(verses) {
    const formatted = needHelp.join('\n')
    console.log(formatted)
}
formatVerses(helpfulVerses);
