/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import cross from '../assets/cross.webp'
import dove from '../assets/dove.webp'
import pray from '../assets/pray.webp'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import ScrollToTop from "../ScrollToTop";

const MainBlog = () => {
    const [blogs, setBlogs] = useState([
        {
            topic: 'Spiritual Growth',
            writer: 'Evang. Adetayo Adeyemi',
            text: [
                'Growth in its physical context connotes progressing from one state to another. As a believer, spiritual growth in its real sense is not just about how long you\'ve lived being a Christian, how much you can fast, how melodious your voice sounds, how fervent you can blast in tongues, the number of years you\'ve been a worker in God\'s vineyard, how gifted you are, etc.  The Criteria to measure your spiritual growth include:',
                '1. LOVE: How your life as a believer is, is it worthy of emulation? The Bible says the greatest of all commandments is LOVE, He that loveth not knoweth not God; for God is love. (1 John 4:8) and the Bible says in Genesis 1:27 that we are God\'s image, and the personality of God is Love which means we being a replica of God ought to love as well. In mathematics, if x=2 it means whenever we see x we use 2 in that case wherever we find a Christian we are to find Love. You say you love your neighbor but you keep doing what hurts your neighbor. Consider 1 John  4:20 if you can\'t express the Genuine love to the one you can see how much more the Invisible God.',
                '2. CHARACTER (A LIFE OF PEACE): The Bible says seek peace with all men and not those that love you alone. Jesus during His mission on Earth depicted the Act of Peace. If you have a bad character and you thought you\'re growing spiritually it\'s a big NO! Our God is Light, definitely our character depict who we are. Many Christians are full of pretentious attitude i.e. they are good to some, bad to others, nice to some, harsh to others etc. All these things end up in vanity. It\'s when you are able to depict God\'s character- Meekness, Joy, Endurance etc. (Galatians 5:22-23), then you can say you\'re growing spiritually. N.B.: There is something people call low self-esteem though it exists but in Christ it\'s non-existent. As a believer when you\'re being insulted and you remain silent, that doesn\'t make you a fool or even seeking peace with someone who hurt you doesn\'t mean you have a low self-esteem. We should all emulate Christ way of Life inspired in the persecution, hatred, spitting on His face etc. Though it is worth fighting the persecutor or even changing His mind for yet He said God should forgive for they know not what they are doing... (Luke 23:34) How many of you can do that if you were to be in His shoes? Certainly none. Food for thought: Anointing takes you up, bad character bring you down.',
                '3. UNDERSTANDING: This is not about how intelligent you are or the number of certificate you possess but it is about how you understand God in some situation of your life. King David went through Hell yet He sees it as a reason to praise God. Many don\'t know that whenever we experience challenge it\'s a way of strengthening our spirit man. Rather they see it as a reason to blaspheme God and utter all sort of negative sayings. Human nature is the flesh in us, but the Apostle Paul says "We should be wise as MEN and be fool as hypocrites" . (1Corinthians 3:18; 10:15) We all tend to the nature of soberness and bitterness when it comes to experience in life but rather let\'s give thanks to God.',
                ' 4. OUTWORKING OF HIS POWER: Possessing God\'s power is not the basis of Spiritual Growth but the dimension at which the  power is being made manifest in your life. With these criteria, examine yourself if you are really growing spiritually or not because the basis that will account hereafter is the spiritual basis not the physical/carnal basis.',
                'Shalom.',
                
            ],
            image: dove,
            id: 1
        },
        {
            topic: 'Five \'L\' that cause deficiency of power and grace',
            writer: 'Evang. Adetayo Adeyemi',
            text: [
                'These are the things that has taken away power and grace and have not made you what God wants for you.',
                '(1) LAZINESS : A lazy man cannot succeed. Proverbs 6:6 tells us to learn from the ants. They have no one to supervise or tell them what to do. Ants are well organized. Poverty,failure comes from laziness. Proverbs 6:6-11. You love food yet you hate work.',
                '(2) LOOSENESS : No moral restraint. Indescent touching of the opposite sex. No restraint in the way you play. No restraint in the way you talk and relate with the opposite sex. Don\'t be loose with your mouth. It is not the nature of Christ to be loose. Looseness will drain you of every grace you carry. We are not ordinary. 1Peter 2:9. Christ in you makes you peculiar. There is grace to control every feeling you have. Looseness makes you display things you should be ashamed of displaying.',
                '(3) LIGHTNESS : They do not take anything serious. Lightness means lacking stability-changeable with ease. A light person doesn\'t know that the purpose of music isn\'t for entertainment but to bring down God\'s presence and enable people to have encounter with God. Anyone who worship God must worship in spirit and truth.',
                '(4) LOQUACIOUSNESS: It means talking too much. Someone who talks too much can drain all power gotten in place of prayer within a short time. Train yourself that every word of your mouth is scriptural. Proverbs 10:19. ',
                '(5) LIKE OTHERS: You cannot be like the majority, if you want to please God. ',
                'You must not follow the crowd. You should rebuke others when you see them doing the wrong things. Dare to be an overcomer and different. Be in the group of people that are spiritually minded. You have to acquire the knowledge of God and anointing now as a youth. 1Timothy4:12. A youth without Christ will be despised. A youth that portrait youthfulness will not be regarded as worthy. Philippians 4:13. You can do all things through Christ. There is grace in Christ to keep you. Out of many prophets who followed Baal there were still 7,000 prophets that didn\'t leave God. God will not change his standard because everyone is doing evil.',
                'THINGS THAT MAKE PEOPLE LOOK DOWN ON YOUTHS.',
                '(1) IMMATURITY: Acting in a childish way. A youth who saturates his mind will be respected and put in place of responsibility. The word of God makes you think, talk and behave wiser than your age. 1Corinthians 13:11, Job 32:6-9 Psalms 119:98-100. Don\'t look down on yourself because of your age. Begin to catch God\'s vision for your life. There is a reason for your existence. Grow up.',
                '(2) IMMORALITY :  Flee all youthful lust. Conform yourself to God\'s ways.2Timothy 2:22.',
                '(3) INDECENT APPEARANCE OR DRESSING:  As a Christian you should dress and comport yourself in a manner that will not expose sensitive parts of your body thereby causing others to stumble through lustful thoughts and temptations. 1Timothy 2:9,1Corinthians 8:9, Romans 14:21.',
                '(4)  INDEPENDENCE/ INSUBORDINATION. Youths believe they should be allowed to make their own decision. As people grow and mature they realize that no one knows all or has all that he needs, that we all need one another. This need for us to depend on one another is called interdependence. That means we can benefit from counsel or talent or grace of other people. 1 Corinthians 12:21-23',
                '(5) INSTABILITY/INCONSISTENCY: You need to overcome the youthful tendency to keep searching from one place to another for excitement and high and strange sounding teachings or spiritual manifestations. Ephesians 4:14.',
                '(6)  INDISCIPLINE: There is need for everyone to discipline his flesh with regards to sleep, television viewing, hand sets, internet browsing, food and drinks and sexual sins. 1corinthians 9:27, 1 John 2:13-14.',
                'Be strong in the Lord. Allow the Word of God to abide in you and you will easily overcome satan, the wicked one. *Ecclesiastes 12:1* says Remember now thy creator in the days of thy youth when the evil days come not and and the years draw near and thou shall say i have no pleasure in them. the glory of the youth is in their strength. use your strength as a youth to add to god\'s kingdom.',
            ],
            image: cross,
            id: 2
        },
        {
            topic: ' What if?',
            writer: 'Evang. Adetayo Adeyemi',
            text: [
                ' WHAT IF HE THOUGHT AS MAN DOES, DID?',
                'I tried to converse about He who sent me but was shy',
                'Kneeling in supplication is a necessity I find impossible',
                'I have duties to perform in the vineyard',
                'But truly time isn\'t a friend',
                'A minute or two with thanks would have been fair',
                'But it is usually a mind-numbing tradition',
                'I wish to help but how much can busy-me render?',
                'I\’m just flesh, PLEASE UNDERSTAND;',
                'Understand my hands are tied',
                'Understand I’m the shy type',
                'Understand I have dire family responsibilities',
                'Understand life isn\'t easy, I have to earn',
                'Understand it could sound awkward',
                'Understand my friends will definitely taunt me',
                'Understand I cherish your holy book and day',
                'But friends get my eye red with wine',
                'Please Understand, IF ONLY:',
                'If only you made me a little taller and less timid',
                'If only you made me more vocal and more vibrant',
                'If only you Graced me with heaven-fat wealth',
                'If only you lightened my family responsibilities',
                'If only you made the sun rule the night',
                'If only I had a labour-free life',
                'If only I am a master of miracles',
                'If only you made the seas red and the sky black',
                'Perhaps, I would have been an asset to you',
                'But then, WHAT IF?',
                'What if God was so self centered?',
                'What if He decides to be absent?',
                'What if he cared less about humanrace?',
                'What if He though as men does, did?',
                'What if he says:',
                'I tried to make my presence to he who sort me but was shy',
                'Listening to supplications is a neccesity I find impossible',
                'I have duties to perform in the life of people',
                'But truly, stress has been my friend',
                'Just an outstretched hand would have been fair',
                'Oh! Too bad, my hands are full',
                'I wish to help but how much can busy-me render?',
                'I\’m a Supreme Being, PLEASE UNDERSTAND;',
                'Understand I have too many voices on my name',
                'Understand the birds, beasts and fishes all rely on me',
                'Understand the field crave my grace',
                'Understand I have to inhabit the praises of my Angels',
                'Understand the Devil wants me to flaw',
                'Understand my responsibility is to the entire Universe',
                'Understand I cherish your beautiful face',
                'But I wont hesitate to let it rot in Hell when you err',
                'Please understand, IF ONLY:',
                'If only you thanked me a little often',
                'If only your offerings were better than your nags',
                'If only you sacrificed a little time with me',
                'If only your heart and ears were unimpeded',
                'If only you made me rule your hours',
                'If only I had lesser responsibilities to harbour',
                'If only I was the master of your life',
                'If only you kept your lamp blazing with light',
                'Perhaps, I would have been an asset to you',
                'But then, GOD IS',
                'God is a father who provides',
                'God is a father who cares [Matt, 7:11]',
                'God is a father who gives [Jn, 3:16]',
                'God is a father who forgives',
                'God is a father who loves',
            ],
            image: pray,
            id: 3
        },
        {
            topic:' Holy spirit is crying - I have missed you',
            writer: 'Evang. Adetayo Adeyemi',
            image: cross,
            text:[
                'Excuse me sir, you didn\'t start like this, what has happened to you? Excuse me Ma, why is this happening?',
                'What has happened to your secret place?',
                'Where is your hunger and burden?',
                'Where is your tears in the place of prayers?',
                'What happened to those nights of burdens, Labour, travail and tears?',
                'What happened to fasting?',
                'What happened to longing and desire for God, not ministry?',
                'What happened to evangelism?',
                'What happened to your night vigils?',
                'I remember before any ministration you will press and labour in word and prayers even with tears trusting God to be seen in that meeting. But today it seems like you have mastered God, you just go up casually.Today we can afford to go from our Facebook page and social  media platforms or jesting and straight up to the Alter to Minister on behalf of God to God,s People. ',
                'Sir, we didn\'t start like that, we had reverence for spiritual things.',
                'What happened  to you sir?',
                'Then, We don\'t care who gets the glory, it\'s all about God but what has happened to us sir?',
                'Then, we were eager to go to conferences to seek God\'s face, there was hunger all over your soul, ready to devour mysteries, the passion for the kingdom was so high, we were even scared if we would be able to exist or do without the Holy Ghost .What happened to your life then? Take time to remember those campus days, those nights at the campus court praying at the top of your voice all night, weeping like a baby just for more of God.',
                'What happened to you sir?',
                'We were eager for fellowship then, serving in God\'s house with all zeal and passion. Oh I remember how we loved the word and fellowship with  brethren.',
                'Could it be because nobody knew us then? ',
                'Could it be because nobody was calling us MOG then?',
                'Could it because we didn\'t  have social media followership then?',
                'Oh Man Of God, What happened to you sir? How come we have been reduced to nothing? No passion again?!',
                'If a pastor corrects us now we now get angry, lateness to church is normal now, then we can sow all for the Kingdom but now never. Oh Man Of God what happened to you? As you are reading this I know He is calling you again.',
                'I hear God saying Son',
                ' I HAVE MISSED YOU ',
                'I HAVE MISSED OUR TIME TOGETHER ',
                'I HAVE MISSED OUR VIGILS AND BIBLES STUDY TIME ',
                'I HAVE MISSED THOSE DAYS WHEN NOBODY KNEW YOU. ',
                'I HAVE MISSED THOSE DAYS WHEN YOU ARE NOT EAGER TO ANSWER WATSAP MESSAGES AND POST BUT YOU WANT TO STAY WITH ME AS LONG AS POSSIBLE. ',
                'SIR/MA, MAY YOU NOT LOOSE YOUR WONDER. PLEASE GO BACK TO KOINONIA, THE HOLY GHOST HAS MISSED YOU.',
                'ACTIVITIES, SOCIAL MEDIA FOLLOWERSHIP IS NOT EQUAL TO HEARTILY CONNECTION WITH THE HOLY GHOST.',
                
                'PLEASE GO BACK TO THE SECRET PLACE',
                'CRY TO HIM, MAY I NOT LOOSE YOUR WONDER PLEASE LORD RESTORE ME.',
                'HE WANTS TO SEE YOUR TEARS LIKE THAT OF A BABY.',
                'HE WANTS TO HEAR THOSE SONGS THAT HAVE NO RHYTHM BUT COME FROM THE DEEPEST PART OF YOUR  HEART.',
                'PLEASE COME BACK HOME',
            ],
            id: 4
        },
        {
            topic: '7 Habits Of a Strong Christian',
            writer: 'Evang. Adetao Adeyemi',
            image: pray,
            text:[
                'If you want to grow in your Christian life pls read this article. It is very Inspiring and motivating .',
                ' When you establish the 7 habits of strong Christians in your life, it will keep you strong, protect you from the enemy, and catapult you to victory. The secret to your future is hidden. It’s not hidden from you, though—it’s hidden for you. You see, your future is up to you. Whatever you have and whatever happens in your life isn’t an accident, or necessarily always God’s will—it is in your hands more than you may know. Where can you find this hidden secret? In your daily routine.',
                '‎What you do on a daily basis will determine what you have in this life. If you’re sowing to your flesh, the results will never be what you want. But if you sow to the spirit, you will become stronger and stronger (Galatians 6:8). You will get to a place where you confidently stand your ground, resist the enemy, and receive more from God—no matter what comes your way. You have a decision to make. Is victory important to you?',
                'Proverbs 8:34-35 says, “Blessed is the man who listens to me, watching DAILY at my gates, waiting at the posts of my doors. For whoever finds me finds life, and obtains favor from the Lord” (NKJV, emphasis added). In other words, an anointed daily routine produces glorious results. If you want to put an end to being defeated or discouraged, or going around the same mountain over and over—it’s time to take your faith to a higher level. When you establish the 7 habits of strong Christians in your life, it will keep you strong, protect you from the enemy, and catapult you to VICTORY.',
                'Habit No. 1: Strong Christian Feed Their Spirit',
                '“Man shall not live by bread alone, but by every word that proceeds from the mouth of God” –Matthew 4:4 (NKJV).‎. This verse says we cannot live on just food for our body—we need food for our spirit, too. A strong Christian knows the reality and severity of the works of the devil and understands the importance of developing a strong spirit to resist him. How do you feed your spirit? By reading God’s Word. Everyday ‎ Strong Christians know one snack each week (church on Sunday) isn’t enough to sustain us through the trials Jesus told us would come our way (John 16:33). We need daily hot meals to stand on top of every trial in a victory stance. Gloria Copeland has always emphasized the importance of spending time in the Word on a daily basis. She says, you must “arrange your schedule around the Word instead of trying to make the Word fit into your busy life.”  That means the Word of God has to become a priority in your life—not something you do in your spare time. Another way to look at it is the way Rick Renner does, which is, “No Word, no breakfast.” Pastor Rick doesn’t eat breakfast until he feeds his spirit with the Word of God every morning.',
                'Habit No. 2: Strong Christians Build Their Faith',
                '“David encouraged and strengthened himself in the Lord his God.” –1 Samuel 30:6, AMPC. Faith is your responsibility. It isn’t God’s, it isn’t your pastor’s, and it isn’t your spouse’s. The only one who can guarantee that you enjoy a strong faith is YOU. God has given you the tools you need to develop a strong faith—the kind of faith that moves mountains, shuts the mouths of lions, quenches the flames of fire, turns weakness to strength, and puts whole armies to flight (Hebrews 11:33-34). How do you build that kind of faith? By hearing the Word of God again and again (Romans 10:17). Feeding your faith is the seed; hearing it again and again is how you water the seed and build faith. Just as with natural muscles, repetition is the key to building strong faith. To build your faith, try implementing some of these ideas into your daily routine: # As you drive to and from work, play already downloaded messages . Then, when you work out, go on a walk, or take your lunch break, put in earbuds and feed your spirit. Download spirit-lifting musics and messages. As you feed your spirit, remember that faith comes by hearing, but so does doubt. So, what are you listening to? What is the news telling you? What are your friends telling you? Guard the precious Word you’ve sown into your heart by refusing to consume anything contrary. When you build your faith by hearing the Word on a daily basis, truth will come, faith will come and then—VICTORY will come.',
                'Habit No. 3: Strong Christians Speak the Word',
                '“Death and life are in the power of the tongue.” –Proverbs 18:21 (NKJV). You’ve heard the saying, You are what you eat. But the Bible says, in essence, You are what you speak (Mark 11:23). Strong Christians speak the Word and only the Word over their lives and the lives of those around them. They know it is often a matter of life and death. And, they don’t intend to waste the power and authority Jesus provided for them. To get to a place where you speak the Word over every situation, work on mastering the first two habits. By putting God’s Word in your heart on a daily basis, speaking His Word will become your knee-jerk reaction to any situation, which means you will react with an automatic, predictable response—FAITH. When a trial comes your way, don’t become the proverbial bump on a log and let the devil have the final word—talk back! When the devil tempted Jesus, He answered back (Matthew 4:1-11). How did He answer? With the Word and the Word only. When He came across a fig tree that didn’t produce, He didn’t just accept it—He talked to it (Mark 11:12-14). God uses words to “call those things which be not as though they were” (Romans 4:17, NKJV), and we need to do the same. No matter what you’re faced with, speak healing, speak blessing, speak abundance, speak forgiveness, speak peace. Speak the Word again and again and again and again. Fire off Scripture like a machine gun. Confess God’s Word in faith—it will change your life.',
                'Habit No. 4: Strong Christians Control Their Thought Life',
                '“This Book of the Law shall not depart from your mouth, but you shall meditate in it day and night, that you may observe to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.” –Joshua 1:8 (NKJV). Is your thought life healthy or toxic? The mind, spirit and body are interconnected— your thoughts affect your words, which affect your health, prosperity, joy, peace and every other area of your life. So, it’s worth taking the time to perfect! On many Believers’ Voice of Victory (BVOV) broadcasts, Dr. Caroline Leaf has shared about the connection between thoughts and overall success in life. When it comes to taking control of your thoughts, she has this to say: “Thoughts are real things—they occupy real estate in your brain. ‘Bring all thoughts into captivity.’ Our brain is designed to do that. And when you do your brain [will] start operating correctly.” To bring every thought into captivity (2 Corinthians 10:5), begin focusing on what you’re thinking about. When your thoughts wander off to things like, you’re not going to get healed; you’re going to die; you’ll never get promoted; how do you capture thoughts like these and cast them down? You resist them. You answer them. Never let your thoughts go unanswered. Instead, say, “I’m not taking that thought.” You can become a master at thought domination by meditating on the Word of God. To meditate means you don’t just hear it—you focus on it, contemplate it and give it serious attention. That’s how you enlarge your capacity for faith, and that’s why the most spiritual people you will ever meet are those who spend time meditating on the Word of God.',
                'Habit No. 5: Strong Christians Anchor Their Heart Through Praise',
                '“I will bless the Lord at all times; His praise shall continually be in my mouth.” –Psalm 34:1, NKJV. ‎Did you know praise is a language? It’s a language of faith and a language of receiving. A strong Christian is fluent in praise. That’s why we’re called to bless the Lord at all times (Psalm 34:1) because no matter what is happening in our lives, we have countless reasons to thank Him for what He has done, what He is doing, and what He will do. If praise is continually in your mouth, does that mean only when it’s good? No. That’s easy. Praise is an act of faith. If you believe you receive what you’ve asked—you’ll thank God for it—even if it hasn’t manifested. Praise says, “I know it’s coming.” Strong Christians know there is a connection between praise and strength. They know a spirit of praise puts you in position and produces spiritual strength.',
                'Habit No. 6: Strong Christians Pray in the Spirit',
                '“[Build] yourselves up on your most holy faith, praying in the Holy Spirit.”—Jude 20 (NKJV). A strong Christian knows the importance of keeping his spiritual battery charged. That’s where praying in other tongues comes in. When you pray in the spirit, you edify yourself, which means to improve or uplift. It strengthens your spirit and builds you up in your faith. The powerful part of praying in other tongues is that it allows you to pray above what you know in the natural. It takes you into the spiritual realm and opens the door to revelation, wisdom, instruction and encouragement.',
                'Habit No. 7: Strong Christians Get Rid of Baggage',
                '“Therefore, since we are surrounded by such a huge crowd of witnesses to the life of faith, let us strip off every weight that slows us down, especially the sin that so easily trips us up.” –Hebrews 12:1. Streamlining is a pretty important concept in aerodynamics. To streamline is to reduce resistance, creating a faster and smoother journey. It is studied by NASA engineers, airline pilots, shipbuilders and even athletes. The idea is to remove anything that would slow a craft, or person, down. The ultimate goal in streamlining is optimum performance and a victorious outcome. That’s what we are called to do in our spiritual lives, too. When God told us to “strip off every weight that slows us down,” He was telling us to streamline our lives so we can enjoy optimum victory. Imagine watching an Olympic runner trying to round the track and run a race wearing a suit of armor. You’d likely coach him through the TV, saying, “Throw off the armor! It’s slowing you down!” That’s what God is saying to us. What kind of baggage are you carrying today? Worry, anxiety, stress or fear? Maybe it’s a habit of sin you haven’t removed or unforgiveness that’s been festering for years. Whatever it is, make the decision to get rid of it today! It’s slowing you down. Take off anything that is hindering you, and run your race to victory!',
                'When you put these 7 habits of strong Christians into practice on a daily basis, you will develop the kind of spirit that will cripple the enemy and ensure the kind of victory you’ve always dreamed of. This is the life Jesus died to give you. This is the life you were meant to live.',
                'culled from Kenneth Copeland Blog',
            ],
            id: 5,
        },
        {
            topic:' Raising Compliant and Defiant Children',
            writer: 'Evang. Adetayo Adeyemi',
            image: dove,
            text: [
               '‘’And all thy children shall be taught of the Lord’’ Isaiah 54:13 KJV',
                'There are two kinds of children. The first are the compliant ones- those who sleep through the night from their second week in life. They coo at their grandparents and smile while their diapers are being changed. During later childhood, they love to keep their rooms clean and do their homework brilliantly without being asked. The defiant ones – story willed kids. They get their mothers attention long before birth because they scratch on the walls (of the womb) and kick like ‘wow’. They enter the world yellowing about the temperature of the room, and complaining about incompetence of the nursing staff. From eighteen months forward, they want to run things and tell everybody what to do. Their favourite word is ‘no’. Compliant children are a breeze to raise, but defiant ones can turn out fine too. The secret is to shape their strong will during early years, without breaking their spirit. This is done by setting boundaries very clearly, then enforcing them with firmness. Even the toughest kids find security in structured environment where other people’s right, as well as their own is protected. When this is done right, even the most independent child can learn to be responsible and self-disciplined. And God will work with you. His promises, ‘‘And all thy children shall be taught of the Lord and great shall the peace of thy children’’',
                'TOO LATE TO FAIL',
                'I bear in my body the marks of Christ that distinguish me from others in the world. God is interested in my success, I cannot fail. I am created a star, destined to overcome, born for glory, designed to shine, fashioned for the top, redeemed to excel, very important and greatly respected for success. Sanctified to manifest, called for victory, chosen to reign, commissioned to prosper, anointed for breakthrough, prepared for exploit, preserved to flourish, and distinguished for favour. God’s mind is made up concerning me. I am the Excellency of all generations. That is why I cannot fail. Even if my enemy so much desire to pull me down, God has gone too far to stop now. It is already too late to fail. Therefore I shall not fail.',
                'HOW TO GET YOUR PRAYERS ANSWERED',
                'Have you spent weeks, months or even years praying about something specific? Are you saying,“Lord, I know what your word says. So why isn’t it working for me?” In order to get the result you are praying for, you must be able to answer these three questions.',
                '1.Are you praying for God’s will? Jesus said “if you abide in Me, and My words abide in you, you will ask what you shall desire, and it shall be done for you” John 15:7 (NKJV). The word “ABIDE” speaks of intimacy and close connection, paints a picture of home – the place where you experience provision and nurture. When you have this kind of relationship with God, you’ll know His heart and His desires so well that your will is going to line up with is will, and as a result, you will get what you ask for. Don’t just assume you are praying in line with God’s will, instead test your prayer by applying the ‘abiding principles. Abiding brings spiritual maturity and when you are spiritually mature, you begin to pray different, not self-centered and self-seeking prayers. The time you spent in the presence of the one you love most becomes more important to you than the end result hoped for. You don’t mind waiting because you realize God’s timing is always perfect. And when He chooses to say no to your request, you rejoice and say, “Then You have something better in mind for me, and I trust You.” Have you reached that point in your walk with Him?',
                '2.Are self-sabotaging your prayers? In Isaiah58; 6-9, God told the Israelites the reason they were not getting answers to their prayers was because they were engaged in ‘CRITICISM AND FINGER-POINTING’ (vs9-10). Have you been guilty of that? It’s as important to glorify God through the words you speak when you are not praying as well as when you are. The Bible says there is a direct link between having a critical, careless tongue and not getting your prayers answered. The way you treat others determines how GOD treats you in return (see Ephesians 6:7-8). God lays it squarely on the line. Stop oppressing your workers, treat them fairly, share your food with hungry and those who are helpless, poor and destitutes. Doing these, GOD will shed his own glorious light on you and your godliness will lead you forward, goodness will be a shield before you, and glory of the lord will protect you from behind. Then when you call, the Lord will answer. All you need to do is to stop oppressing the week, stop making false accusations and spreading vicious rumours!  On this point, your light will shine out of darkness, around you shall be as bright as day and the promises in Isaiah 58:11 shall be made manifest. That means the answer to your prayers is contingent upon two things: YOUR ATTITUDE AND YOUR ACTION TOWARDS OTHERS.',
                '3. Do you show a loving attitude? Eph 5:2 KJV “Walk in love as Christ also hath loved us, and hath given himself for us”. Your mouth is such a major part in the love walk. We fail to realize how much we can do for people by building them up with our words. We need to be very careful not to say things that tear them down. The Bible says “the heart is deceitful above all things” (Jer.17:19). What vibes are you giving off? What are you saying out there? When we are too busy to show our love, then we should examine our heart, motives and attitudes. How do we do that? By examining our tongue and what’s coming out of our mouth. When last have you seen your doctor and he asked you to open your mouth and say “Aaah”? The reason they asked you to do that is to examine your tongue. Just like your tongue tells a physician a lot about your physical health, it can also tell a lot about your spiritual health.',
                'Remember, to get your prayers answered, you must:',
                '1.Learn to abide in Christ. This will bring you to a higher level of spiritual maturity and helps you discover the authority you have in prayer; ',
                '2.Speak in line with God’s word. This can move mountains in your life (see Mark 11:23);',
                '3.Grow in your love walk. This opens up powerful opportunities for you to show others who God really is.',
                'FIVE KEYS TO IMPROVING YOUR HEALTH',
                'Illnesses cause inconvenience to the body as well as to your account. Illnesses do not only make you feel bad, but also makes you unable to do things effectively. Illnesses create a need for someone to look after you, and cause you to pay expensive medicines and treatment. Well, as it has been said that “prevention is better than cure”, some illnesses cannot be cured but managed. Managed illnesses are results of chronic diseases that manifests in the body system for a longer period of time, but takes short time to progress. There is much you can do to slow down or even prevent the occurrence of illnesses. Five things to consider that you can do today to get on the road to better health are:',
                'Practice good hygiene',
                'According to The Mayo Clinic, “one of the best ways to avoid getting sick and spreading illness is to wash your hands”. One of the easiest ways to catch a cold or influenza is to rub your nose or your eyes when your hands have been contaminated with germs. Your best defense against such contamination is to wash your hands regularly. Good hygiene can also prevent the spread of more serious conditions, such as pneumonia and diarrhea, which every year causes the death of over two million children under the age of five. Even the spread of the deadly Lassa fever can be minimized by observing a good hygiene practice.',
                'There are certain times when hand washing is particularly important to protect your own health and that of others. You should wash your hands:',
                'After using the toilet',
                'After changing diapers or helping a child to use the toilet',
                'Before and after treating a wound or cut',
                'Before and after being with someone who is sick',
                'Before preparing, serving or eating food',
                'After sneezing, coughing or blowing your nose',
                'After touching an animal waste',
                'After handling garbage',
                'And do not take it for granted that you are cleaning your hands properly. Studies have shown that a large percentage of those who use public toilets do not wash their hands afterwards or do not wash them correctly. How then should you wash your hands?',
                'Wet your hands in clean running water and apply ',
                'Rub your hands together to make a lather, not forgetting to clean your nails, your thumbs, the backs or your hands, and between your fingers',
                'Keep rubbing for at least 20 seconds',
                'Rinse in clean running water',
                'Dry with a clean cloth or paper towel.',
                'Such measures are simple but can avert illness and save lives.',
                'Use a safe water supply',
                'obtaining a sufficient clean water for one’s family is a chore in some countries. Yet, access to clean water can become a concern in any part of the world when a main supply that is usually good to drink becomes contaminated as a result of flood, storm, pipe break, or some other issues. If water does not come from a safe source or is not stored appropriately, it can cause parasite infestation, cholera, life-threatening diarrhea, typhoid, hepatitis, and other infections. Unsafe drinking water is one of the causes of an estimated 1.7 billion cases of diarrheal diseases every year.',
                'Cholera is most often contracted when a person drinks water or eats food that is contaminated with feacal matter from infected people. What steps can you take to protect yourself, even in the immediate aftermath of a disaster, from this and other types of water contamination?',
                'Ensure  that your drinking water, including the water used for brushing of teeth, making ice, washing food and dishes, or cooking comes from a safe source, such as an adequately treated public supply or sealed bottles from a reputable firm',
                'If there is any possibility that your piped supply has been contaminated, boil your water before use or treat it with an appropriate chemical product',
                'When using chemicals ssuch as chlorine or water purifying tablets, follow the maker’s directions carefully',
                'Use quality water filters, if available and affordable',
                'If no water treatments are available, add household bleach – two drops per liter of water – mix well and leave it for 30 minutes before using it.',
                'Always store treated water in clean , covered containers to protect it from possible re-contamination',
                'Ensure that any vessel used to take water from your stored supply, such as ladle, is clean',
                'Handle water containers with clean hands, and do no dip your hands or fingers into water used for drinking',
            ],
            id: 6,
        }
    ])

    const [page, setPage] = useState(0)

    const readBlogs = (index) => {
        setPage(index + 1);
    }

    const close = () => {
        setPage(0);
    }

    const pageDisplay = () => {
        if (page === 0) {
            return (
                <div>
                    <div className="block w-10/12 pb-20 mx-auto">
                        <h1 className="font-secondary text-[2rem] font-semibold text-blue-900 text-center uppercase pb-6">Blogs</h1>
                        <div className="grid lg:grid-cols-3 mobile:gap-5 laptop:gap-10">
                            {blogs.map((blog, index) => (
                                <div key={blog.id}  >
                                    <div className="relative bg-white shadow-md shadow-gray-400 rounded-xl mobile:w-full  tablet:w-9/12 laptop:w-full mx-auto max-sm:lg:full lg:h-[35rem] h-[30rem] tablet:h-[30rem] flex-nowrap flex-shrink-0 pt-5 overflow-y-hidden">
                                        <div>
                                            <img className="object-cover w-10/12 mx-auto overflow-y-hidden rounded-xl h-2/6" src={blog.image} alt={blog.topic} />
                                        </div>
                                        <div className="w-10/12 mx-auto mt-8 overflow-x-hidden">
                                            <h1 className="grid font-semibold text-gray-600">
                                                <span className="text-md">Topic: {blog.topic} </span>
                                                <span className="text-sm font-thin">Written by {blog.writer} </span>
                                            </h1>
                                            <div className="mt-1 overflow-x-hidden text-justify">
                                                {blog.text && Array.isArray(blog.text) && (
                                                    blog.text.map((paragraph, index) => (
                                                        <div key={index} className="mb-4">
                                                            {paragraph}
                                                       </div>
                                                    ))
                                                )}                                         
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 grid w-full py-3 bg-blue-900 rounded-b-xl">
                                            <button className="font-semibold text-white text-md" onClick={() => readBlogs(index)}>Continue reading...</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else if (page >= 1 && page <= blogs.length) {
            const currentBlog = blogs[page - 1];
            return (
                <div>
                    <div className="w-11/12 mx-auto lg:w-10/12">
                        <div className="text-gray-600">
                            {/* Display details of the current blog */}
                            <h1 className="grid pb-2 text-2xl font-bold leading-none">
                                {currentBlog.topic}
                                <span className="text-lg font-thin">written by {currentBlog.writer}</span>
                            </h1>
                            {currentBlog.text && Array.isArray(currentBlog.text) && (
                                currentBlog.text.map((paragraph, index) => (
                                    <div key={index} className="mb-4 text-justify">
                                        {paragraph}
                                    </div>
                                ))
                            )}                      
                        </div>
                        
                        <button onClick={close} className="block px-5 py-2 mx-auto mt-10 text-lg font-semibold text-white bg-blue-900 rounded-lg">
                            Back to blogs
                        </button>
                       
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="lg:pt-[7rem] pt-[5.5rem]">
            {pageDisplay()}
        </div>
    );
}

export default MainBlog;
