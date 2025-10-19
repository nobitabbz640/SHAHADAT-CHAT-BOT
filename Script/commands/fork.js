module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send YouTube channel and GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত বট ইউজার 🌟\n\n" +
        "আপনি যদি তৈরি করতে চান, তাহলে চলে যান আমার বস ইভানের ইনবক্সে। " +
        "সেখানে আমার বস ইভান আপনাকে ফ্ররক লিংক দিয়ে দিবে।" +
        "তাহলে আর দেরি না করে এখনি চলে যান আমার বস ইভানের ইনবক্সে।\n\n" +
        "➤ Facebook Id: https://www.facebook.com/ev4u.mallik\n\n" +
        "🔗 Whatsapp: https://WA.me/+8801400465471";

    return api.sendMessage(message, event.threadID, event.messageID);
};
