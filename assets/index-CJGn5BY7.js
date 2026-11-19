(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const is=JSON.parse('[{"id":"panda-f100100","name":"מרובע 100×100×2","catalogNumber":"F100100","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["post","fencePost","jamb","railingPost"],"kind":"linear","aMm":100,"bMm":100,"thicknessMm":2,"kgPerM":2.242,"stockLengthsM":[6,6.5,7],"notes":"עמוד מרובע. אצל אפאר קיים גם מוצר בשם עמוד 100/100 בלי מק״ט בדף החנות."},{"id":"panda-pa2012","name":"מרובע 150×150×2.5","catalogNumber":"pa2012","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["post","fencePost","railingPost"],"kind":"linear","aMm":150,"bMm":150,"thicknessMm":2.5,"kgPerM":4.256,"stockLengthsM":[6,7],"notes":""},{"id":"panda-f8080","name":"מרובע 80×80×2","catalogNumber":"F8080","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":false,"roles":["post","fencePost","jamb","railingPost"],"kind":"linear","aMm":80,"bMm":80,"thicknessMm":2,"kgPerM":1.912,"stockLengthsM":[],"notes":"משקל 1.912 ק״ג למטר פורסם. אורך המוט לא צוין בעמוד, והאפליקציה תשתמש באורך המוט שנבחר בהגדרות."},{"id":"panda-hs004","name":"מרובע 130×130×2","catalogNumber":"HS004","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":false,"roles":["post","fencePost"],"kind":"linear","aMm":130,"bMm":130,"thicknessMm":2,"kgPerM":null,"stockLengthsM":[],"notes":"המידה והמק״ט מופיעים בשם הפריט. משקל ואורך מוט לא נקראו בצמוד לפריט."},{"id":"panda-f4040","name":"מרובע 40×40×1.2","catalogNumber":"F4040","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["railingPost","fencePost","railingInfill"],"kind":"linear","aMm":40,"bMm":40,"thicknessMm":1.2,"kgPerM":null,"stockLengthsM":[6,6.5,7],"notes":"אורך המוט פורסם. המשקל למטר לא נקרא בצמוד לפריט."},{"id":"panda-3602","name":"פרופיל 2000 66×66","catalogNumber":"3602","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["railingPost","post","fencePost"],"kind":"linear","aMm":66,"bMm":66,"thicknessMm":null,"kgPerM":1.307,"stockLengthsM":[6,6.5,7],"notes":"מתאים גם כעמוד מעקה. רב-בריח מציינים עמוד מעקה 66/66 בלי המק״ט הזה."},{"id":"panda-pa1127","name":"עמוד גדר 70×70","catalogNumber":"PA1127","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":false,"roles":["fencePost","jamb"],"kind":"linear","aMm":70,"bMm":70,"thicknessMm":null,"kgPerM":1.726,"stockLengthsM":[],"notes":"אורך המוט לא צוין בעמוד המחשבון."},{"id":"panda-pa1055","name":"עמוד 60×60 פלוס מכסה","catalogNumber":"pa1055","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":false,"roles":["fencePost","jamb","railingPost"],"kind":"linear","aMm":60,"bMm":60,"thicknessMm":null,"kgPerM":1.726,"stockLengthsM":[],"notes":"כולל מכסה לפי שם הפריט. אורך המוט לא צוין."},{"id":"generic-sq-120","name":"מרובע 120×120","catalogNumber":null,"source":"מידה כללית. לא נמצא מק״ט 120×120 אצל פנדה (יש 100, 130, 150, 200), לידר או סילבר.","sourceUrl":null,"generic":true,"skuVerified":false,"dimsVerified":false,"stockVerified":false,"roles":["post","fencePost","railingPost"],"kind":"linear","aMm":120,"bMm":120,"thicknessMm":null,"kgPerM":null,"stockLengthsM":[],"notes":"מידה כללית בלבד. עדכנו חתך, משקל ואורך מוט לפי הספק לפני הזמנה."},{"id":"panda-f10040","name":"מלבן 40×100×1.8","catalogNumber":"f10040","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["beam","rafter"],"kind":"linear","aMm":40,"bMm":100,"thicknessMm":1.8,"kgPerM":1.372,"stockLengthsM":[6,6.5,7,5,4,3.85],"notes":"קורה או קורת משנה. לידר מציינים מסגרת 40×100 בקיט Open Sky, בלי המק״ט הזה."},{"id":"lidar-120x40","name":"מסגרת 120×40","catalogNumber":null,"source":"לידר אלומיניום, מפרט קיט לירז","sourceUrl":"https://www.lidar.co.il/%d7%a4%d7%a8%d7%92%d7%95%d7%9c%d7%95%d7%aa-%d7%90%d7%9c%d7%95%d7%9e%d7%99%d7%a0%d7%99%d7%95%d7%9d/","generic":false,"skuVerified":false,"dimsVerified":true,"stockVerified":false,"roles":["beam","rafter"],"kind":"linear","aMm":40,"bMm":120,"thicknessMm":2,"kgPerM":null,"stockLengthsM":[],"notes":"הקיט מציין עובי אלומיניום 2 מ״מ, מסגרת 120×40 ופרופילי חציצה 120×40. אין מק״ט מפעל."},{"id":"panda-3601","name":"פרופיל 2000 66×100","catalogNumber":"3601","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["beam","rafter"],"kind":"linear","aMm":66,"bMm":100,"thicknessMm":null,"kgPerM":1.326,"stockLengthsM":[6,6.5,7],"notes":""},{"id":"panda-f20050","name":"מלבן 50×200×3","catalogNumber":"F20050","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["beam"],"kind":"linear","aMm":50,"bMm":200,"thicknessMm":3,"kgPerM":4.248,"stockLengthsM":[6,6.5,7],"notes":"קורה כבדה."},{"id":"panda-pa1429","name":"דאבל טי 120","catalogNumber":"pa1429","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["beam","rafter"],"kind":"linear","aMm":120,"bMm":null,"thicknessMm":null,"kgPerM":2.314,"stockLengthsM":[6,6.5,7],"notes":"פורסם רוחב 120 מ״מ בלבד. המידה השנייה לא פורסמה, והשרטוט משתמש בחתך מרובע משוער."},{"id":"panda-r242","name":"דאבל טי 142×1.6","catalogNumber":"R242","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["beam"],"kind":"linear","aMm":142,"bMm":null,"thicknessMm":1.6,"kgPerM":2.529,"stockLengthsM":[6,6.5,7],"notes":"מידה שנייה של החתך לא פורסמה."},{"id":"panda-r291","name":"מרזב 120","catalogNumber":"R291","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["beam"],"kind":"linear","aMm":120,"bMm":null,"thicknessMm":2,"kgPerM":2.6,"stockLengthsM":[6,7],"notes":"מתואר כמלבן עם מרזב נסתר. המידה השנייה לא פורסמה."},{"id":"panda-hs001","name":"טי 120 חוצץ לפרגולה","catalogNumber":"HS001","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["rafter","beam"],"kind":"linear","aMm":120,"bMm":null,"thicknessMm":null,"kgPerM":2.249,"stockLengthsM":[6,6.5,7],"notes":"חוצץ. פורסמה מידה 120 בלבד."},{"id":"panda-hs022","name":"טי 100 חוצץ לפרגולה","catalogNumber":"hs022","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["rafter"],"kind":"linear","aMm":100,"bMm":null,"thicknessMm":1.8,"kgPerM":1.73,"stockLengthsM":[6,7],"notes":"חוצץ. פורסמה מידה 100 ועובי 1.8 מ״מ."},{"id":"panda-pa1121","name":"מלבן 20×70×1.6","catalogNumber":"pa1121","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":70,"thicknessMm":1.6,"kgPerM":0.89,"stockLengthsM":[6,6.5,7],"notes":"שלב הצללה או שלב גדר. הפן הרחב, 70 מ״מ, נספר כרוחב הכיסוי."},{"id":"panda-pa2024","name":"שלב 20×70×0.8 PAN1","catalogNumber":"PA2024","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":70,"thicknessMm":0.8,"kgPerM":0.4,"stockLengthsM":[6],"notes":"קטגוריה במחשבון: מילוי פרגולה/גדר/שער."},{"id":"panda-pa2023","name":"שלב 20×70×0.8 PAN2","catalogNumber":"PA2023","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":70,"thicknessMm":0.8,"kgPerM":0.4,"stockLengthsM":[6],"notes":""},{"id":"panda-hs005","name":"מלבן 20×90×1","catalogNumber":"HS005","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":90,"thicknessMm":1,"kgPerM":0.62,"stockLengthsM":[6],"notes":""},{"id":"lidar-20x40","name":"שלב 20×40","catalogNumber":null,"source":"לידר אלומיניום, מפרט קיט הצללה 40×20","sourceUrl":"https://www.lidar.co.il/%d7%a4%d7%a8%d7%92%d7%95%d7%9c%d7%95%d7%aa-%d7%90%d7%9c%d7%95%d7%9e%d7%99%d7%a0%d7%99%d7%95%d7%9d/","generic":false,"skuVerified":false,"dimsVerified":true,"stockVerified":false,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":40,"thicknessMm":2,"kgPerM":null,"stockLengthsM":[],"notes":"הקיט מציין פרופילי הצללה 40×20 ועובי 2 מ״מ. אין מק״ט."},{"id":"rav-20x50","name":"שלב 20×50","catalogNumber":null,"source":"רב-בריח, מפרט מערכות הצללה ומסתור","sourceUrl":"https://business.rav-bariach.co.il/wp-content/uploads/sites/2/--1-14.pdf","generic":false,"skuVerified":false,"dimsVerified":true,"stockVerified":false,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":50,"thicknessMm":null,"kgPerM":null,"stockLengthsM":[],"notes":"המסמך מציין שלב מלבני 50/20 למסתור ולפרגולה. אין מק״ט משיכה."},{"id":"generic-20x100","name":"שלב 20×100","catalogNumber":null,"source":"מידה כללית. לא אומת מק״ט 20×100 בקטלוגים שנפתחו.","sourceUrl":null,"generic":true,"skuVerified":false,"dimsVerified":false,"stockVerified":false,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":100,"thicknessMm":null,"kgPerM":null,"stockLengthsM":[],"notes":"מידה כללית נפוצה. אצל פנדה אומתו 20×70 ו-20×90, לא 20×100."},{"id":"panda-hs024","name":"מקבילית גדולה 78.5×20","catalogNumber":"HS024","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":false,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":78.5,"thicknessMm":null,"kgPerM":null,"stockLengthsM":[],"notes":"מידות מהשם. משקל ואורך מוט לא נקראו בצמוד לפריט."},{"id":"panda-hs025","name":"מקבילית קטנה 58.5×20","catalogNumber":"HS025","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":false,"roles":["slat","fenceSlat"],"kind":"linear","aMm":20,"bMm":58.5,"thicknessMm":null,"kgPerM":null,"stockLengthsM":[],"notes":"מידות מהשם. משקל ואורך מוט לא נקראו בצמוד לפריט."},{"id":"panda-i225","name":"הצללה / רפפה זד","catalogNumber":"I225","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["slat"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":0.413,"stockLengthsM":[6,6.5,7],"notes":"חתך Z בלי מידות חיצוניות. יש להשלים רוחב פן במסך הפרופילים לפני ספירת שלבים."},{"id":"panda-pa0620","name":"הצללה חצי ירח","catalogNumber":"PA0620","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["slat"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":0.28,"stockLengthsM":[6,6.5,7],"notes":"חתך לא מלבני. יש להשלים רוחב פן לפני ספירה."},{"id":"panda-i245","name":"פרופיל גדר שני קנטים","catalogNumber":"I245","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["fenceSlat"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":1.3,"kgPerM":0.799,"stockLengthsM":[6],"notes":"עובי 1.3 מ״מ. רוחב הפן לא פורסם — השלימו אותו לפני ספירת שורות."},{"id":"panda-i246","name":"פרופיל גדר קנט אחד","catalogNumber":"I246","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["fenceSlat"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":0.785,"stockLengthsM":[6],"notes":"רוחב הפן לא פורסם."},{"id":"panda-i234","name":"גדר 40×60","catalogNumber":"I234","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["gateFrame","fenceSlat"],"kind":"linear","aMm":40,"bMm":60,"thicknessMm":1.4,"kgPerM":0.987,"stockLengthsM":[6],"notes":"מתואר כפרופיל לגדר או שער בריתוך. במסגרת שער, 40 מ״מ נחשב לרוחב הניצב ו-60 מ״מ לגובה הסורג."},{"id":"panda-pa0062","name":"גדר 50×40","catalogNumber":"pa0062","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["gateFrame"],"kind":"linear","aMm":50,"bMm":40,"thicknessMm":null,"kgPerM":0.89,"stockLengthsM":[7],"notes":"אורך מוט שפורסם: 7 מ׳."},{"id":"panda-i247","name":"פרופיל שער עם מעצור","catalogNumber":"I247","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["gateFrame"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":1.3,"kgPerM":0.845,"stockLengthsM":[6],"notes":"חתך לא פורסם. השלימו מידות לפני חישוב מסגרת."},{"id":"panda-1358a","name":"יו 36×30×2.5","catalogNumber":"1358A","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["edge"],"kind":"linear","aMm":36,"bMm":30,"thicknessMm":2.5,"kgPerM":0.64,"stockLengthsM":[6],"notes":"פרופיל יו לשפת לוח."},{"id":"panda-p1328","name":"יו 95×50×3","catalogNumber":"p1328","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["edge"],"kind":"linear","aMm":95,"bMm":50,"thicknessMm":3,"kgPerM":1.632,"stockLengthsM":[6],"notes":""},{"id":"panda-pa6580","name":"יו לסורג שקוף","catalogNumber":"pa6580","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["edge","bottomRail"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":0.562,"stockLengthsM":[6,6.5,7],"notes":"חתך לא פורסם."},{"id":"silver-ysl002","name":"יו לזכוכית מעקה 22×27","catalogNumber":"900YSL002-70","source":"סילבר אלומיניום, קטלוג פרופילים","sourceUrl":"https://www.silveraluminum.com/%D7%A7%D7%98%D7%9C%D7%95%D7%92/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["edge","bottomRail"],"kind":"linear","aMm":22,"bMm":27,"thicknessMm":null,"kgPerM":0.38,"stockLengthsM":[7],"notes":"הדף מציין אורך 7 מ׳ ומשקל 2.66 ק״ג למוט. 0.38 ק״ג למטר חושב ממשקל המוט."},{"id":"panda-pa1160","name":"מלבן 60×30","catalogNumber":"pa1160","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["handrail","bottomRail","railingInfill"],"kind":"linear","aMm":60,"bMm":30,"thicknessMm":null,"kgPerM":0.8112,"stockLengthsM":[6,6.5,7],"notes":"פרופיל מלבני שאפשר לשמש כמאחז. מאחז היד הייעודי pa0103 מופיע בלי מידות חתך."},{"id":"panda-pa0103","name":"מאחז יד מלבני","catalogNumber":"pa0103","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["handrail"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":1.878,"stockLengthsM":[6,6.5,7],"notes":"קטגוריה: פרופיל למעקה. מידות החתך לא פורסמו — השלימו אותן לשרטוט."},{"id":"panda-pa0104","name":"סרגל זיגוג למאחז מלבני","catalogNumber":"pa0104","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["edge"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":0.294,"stockLengthsM":[6,6.5,7],"notes":""},{"id":"panda-pa046","name":"יו תחתון למעקה 26×25","catalogNumber":"pa046","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["bottomRail","edge"],"kind":"linear","aMm":26,"bMm":25,"thicknessMm":null,"kgPerM":0.424,"stockLengthsM":[6,6.5,7],"notes":""},{"id":"panda-pa6519","name":"יו תחתון למעקה","catalogNumber":"pa6519","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["bottomRail"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":0.47,"stockLengthsM":[6,6.5,7],"notes":"חתך לא פורסם."},{"id":"panda-pa6581","name":"יו הגבהה למעקה","catalogNumber":"pa6581","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":false,"stockVerified":true,"roles":["bottomRail","edge"],"kind":"linear","aMm":null,"bMm":null,"thicknessMm":null,"kgPerM":0.404,"stockLengthsM":[6,6.5,7],"notes":"חתך לא פורסם."},{"id":"panda-f2020","name":"מרובע 20×20×1","catalogNumber":"f2020","source":"פנדה תעשיות אלומיניום, מחשבון פרופילים","sourceUrl":"https://www.panda-alum.co.il/profile-calculator/","generic":false,"skuVerified":true,"dimsVerified":true,"stockVerified":true,"roles":["railingInfill"],"kind":"linear","aMm":20,"bMm":20,"thicknessMm":1,"kgPerM":0.301,"stockLengthsM":[6,6.5,7],"notes":"זקף או מילוי דק."},{"id":"polygal-1050x6000","name":"פוליגל 1050×6000","catalogNumber":null,"source":"ש. כהן, לוחות פוליגל — מידות סטנדרט מהמפעל","sourceUrl":"https://www.shcohen.com/%D7%9E%D7%95%D7%A6%D7%A8%D7%99-%D7%A4%D7%9C%D7%A1%D7%98%D7%99%D7%A7-1/%D7%9C%D7%95%D7%97%D7%95%D7%AA-%D7%A4%D7%95%D7%9C%D7%99%D7%92%D7%9C","generic":false,"skuVerified":false,"dimsVerified":true,"stockVerified":true,"roles":["panel"],"kind":"sheet","aMm":1050,"bMm":8,"thicknessMm":8,"kgPerM":null,"stockLengthsM":[6],"sheetWidthMm":1050,"sheetLengthMm":6000,"coverWidthMm":1050,"notes":"מידות סטנדרט שפורסמו: 1050/6000 וגם 1050/3000. עוביים 4, 6, 8, 10 מ״מ. 8 מ״מ הוא עובי לשרטוט בלבד, לא מק״ט."},{"id":"polygal-2100x6000","name":"פוליגל 2100×6000","catalogNumber":null,"source":"ש. כהן ופוליגריל — רוחב סטנדרטי 2100 מ״מ, אורך עד 6000 מ״מ","sourceUrl":"https://www.polycryl.co.il/polygal","generic":false,"skuVerified":false,"dimsVerified":true,"stockVerified":true,"roles":["panel"],"kind":"sheet","aMm":2100,"bMm":8,"thicknessMm":8,"kgPerM":null,"stockLengthsM":[6],"sheetWidthMm":2100,"sheetLengthMm":6000,"coverWidthMm":1050,"notes":"רוחב הכיסוי 1050 מ״מ מחלק את הלוח לשניים. אפשר לשנות את רוחב הכיסוי בטופס. כיוון הצלעות לאורך העומק."},{"id":"generic-sandwich-1000","name":"פאנל מבודד, רוחב כיסוי 1000","catalogNumber":null,"source":"מידה כללית לרוחב כיסוי של פאנל גג. לא אומת מק״ט.","sourceUrl":null,"generic":true,"skuVerified":false,"dimsVerified":false,"stockVerified":false,"roles":["panel"],"kind":"sheet","aMm":1000,"bMm":40,"thicknessMm":null,"kgPerM":null,"stockLengthsM":[6],"sheetWidthMm":1000,"sheetLengthMm":6000,"coverWidthMm":1000,"notes":"מידה כללית. אורך 6 מ׳ הוא ברירת מחדל לעריכה, לא נתון קטלוג. עדכנו רוחב כיסוי ואורך לפי הספק."}]');function Ir(n,e){if(e<=0)return[];const t=Math.floor(n/e);let i=n-t*e;const s=new Array(e);for(let r=0;r<e;r+=1){const a=i>0?1:0;i>0&&(i-=1),s[r]=t+a}return s}function Os(n,e){if(!(e>0))return{error:"מרווח לא תקין"};if(!(n>0))return{nGaps:0,parts:[]};const t=Math.max(1,Math.ceil(n/e-1e-9));return{nGaps:t,parts:Ir(n,t)}}function Qi(n,e,t){if(!(e>0)||!(n>0))return 0;const i=Math.max(0,t);let s=Math.floor((n+i)/(e+i));for(;s>0&&s*e+(s-1)*i>n;)s-=1;return s}function ic(n,e){const t=n.slice();let i=0;for(let s=0;s<t.length;s+=1)t[s]>0&&t[s]<e&&(i+=t[s],t[s]=0);if(i>0){let s=-1;for(let r=t.length-1;r>=0;r-=1)if(t[r]>=e){s=r;break}s===-1&&(s=t.length-1),t[s]+=i}return t}function hl(n,e,t=0,i=0){const s=e-i;if(!(s>0))return{ok:!1,error:"אורך המוט קטן מתוספת הקצה"};if(!(n>0))return{ok:!0,pieces:[]};if(n<=s)return{ok:!0,pieces:[n]};const r=Math.max(0,t);if(s<=r)return{ok:!1,error:"חפיפת החיבור גדולה מאורך המוט השימושי"};const a=Math.ceil((n-r)/(s-r)),o=[];let l=0;for(let h=0;h<a-1;h+=1)o.push(s),l+=s-r;const c=n-l;return!(c>0)||c>s?{ok:!1,error:"פיצול החיתוך נכשל"}:(o.push(c),{ok:!0,pieces:o})}function sc(n,e,{kerfMm:t=0,endTrimMm:i=0}={}){const s=n.map((d,f)=>({...d,index:f})).filter(d=>d.lengthMm>0).sort((d,f)=>f.lengthMm-d.lengthMm||d.index-f.index),r=[],a=[],o=e-i;for(const d of s){if(d.lengthMm>o){a.push({lengthMm:d.lengthMm,message:"חלק ארוך מהמוט"});continue}let f=-1,m=1/0;for(let g=0;g<r.length;g+=1){const M=rc(r[g],d.lengthMm,t,i);if(M<=e){const p=e-M;p<m&&(m=p,f=g)}}f===-1?r.push({cuts:[d],sum:d.lengthMm}):(r[f].cuts.push(d),r[f].sum+=d.lengthMm)}const l=r.map((d,f)=>{const m=d.cuts.length,g=t*Math.max(0,m-1),M=d.sum+g+i;return{index:f+1,stockMm:e,cuts:d.cuts.map(({lengthMm:p,label:u,nominalMm:w,part:T,parts:E})=>({lengthMm:p,label:u,nominalMm:w,part:T??null,parts:E??null})),usedMm:M,wasteMm:e-M}}),c=l.reduce((d,f)=>d+f.wasteMm,0),h=l.length*e;return{bars:l,barCount:l.length,wasteMm:c,wastePct:h?c/h:0,errors:a}}function rc(n,e,t,i){const s=n.cuts.length;return n.sum+e+t*s+i}function ac(n,e){var s;const t=((s=n.stockLengthsMm)==null?void 0:s.filter(r=>r>0))??[],i=e.preferredStockMm||e.defaultStockMm||6e3;return e.stockMode==="auto"?t.length?t:[i]:t.includes(i)?[i]:t.length?[t.slice().sort((r,a)=>Math.abs(r-i)-Math.abs(a-i)||a-r)[0]]:[i]}function oc(n,e,t){var r;const i=new Map;for(const a of n){if(!a.qty||a.kind==="sheet")continue;const o=i.get(a.profileId)||[];o.push(a),i.set(a.profileId,o)}const s=[];for(const[a,o]of i){const l=e[a];if(!l){s.push({profileId:a,error:"פרופיל חסר",bars:[],barCount:0,wasteMm:0,wastePct:0});continue}const c=((r=l.stockLengthsMm)==null?void 0:r.filter(M=>M>0))??[],h=ac(l,t);let d=null,f=null;for(const M of h){const p=[];let u=null;for(const E of o){const k=hl(E.cutMm,M,E.spliceMm||0,t.endTrimMm||0);if(!k.ok){u=k.error;break}for(let R=0;R<E.qty;R+=1)k.pieces.forEach((A,L)=>{p.push({lengthMm:A,label:E.label,nominalMm:E.nominalMm,part:k.pieces.length>1?L+1:null,parts:k.pieces.length>1?k.pieces.length:null})})}if(u){f=u;continue}const w=sc(p,M,t),T=[w.barCount,w.wasteMm];(!d||T[0]<d.score[0]||T[0]===d.score[0]&&T[1]<d.score[1])&&(d={score:T,packed:w,stock:M})}if(!d){s.push({profileId:a,profileName:l.name,catalogNumber:l.catalogNumber||null,error:f||"לא נמצא אורך מוט",bars:[],barCount:0,wasteMm:0,wastePct:0,stockAssumed:!0});continue}const m=d.packed.bars.reduce((M,p)=>M+p.cuts.reduce((u,w)=>u+w.lengthMm,0),0),g=l.kgPerM??null;s.push({profileId:a,profileName:l.name,catalogNumber:l.catalogNumber||null,source:l.source||"",generic:!!l.generic,kgPerM:g,stockMm:d.stock,stockAssumed:!c.includes(d.stock),error:null,cutKg:g==null?null:m/1e3*g,orderKg:g==null?null:d.packed.barCount*d.stock/1e3*g,...d.packed})}return s}function lc({pieceW:n,pieceL:e,sheetW:t,sheetL:i,qty:s,allowRotate:r=!1}){const a=(l,c)=>!(l>0)||!(c>0)||l>t||c>i?0:Math.floor(t/l)*Math.floor(i/c);let o=a(n,e);return r&&(o=Math.max(o,a(e,n))),o<1?{ok:!1,perSheet:0,sheets:0}:{ok:!0,perSheet:o,sheets:Math.ceil(s/o)}}const Za=40;function cc(n){const e=uc(n.cutting),t=[],i=[],s=dc(e);let r;if(n.kind==="pergola"?r=fc(n,e,s,i,t):n.kind==="fence"?r=gc(n,e,s,i,t):n.kind==="railing"?r=Mc(n,e,s,i,t):t.push("סוג לא מוכר"),t.length||!r)return{ok:!1,errors:t,warnings:i,assumptions:s,layout:null,lines:[],packing:[],summary:hc()};const a={};for(const f of r.profiles)a[f.id]=f;const o=oc(r.lines,a,e).concat(r.sheetPlans||[]),l=r.lines.reduce((f,m)=>f+m.qty,0),c=o.reduce((f,m)=>f+(m.barCount||0),0),h=o.filter(f=>f.kind!=="sheet").reduce((f,m)=>f+(m.wasteMm||0),0),d=o.filter(f=>f.kind!=="sheet").reduce((f,m)=>f+(m.barCount||0)*(m.stockMm||0),0);return{ok:!0,errors:t,warnings:i,assumptions:s,layout:r.layout,lines:r.lines,packing:o,summary:{pieceCount:l,barCount:c,wasteMm:h,wastePct:d?h/d:0,lineCount:r.lines.length}}}function hc(){return{pieceCount:0,barCount:0,wasteMm:0,wastePct:0,lineCount:0}}function uc(n={}){return{kerfMm:Math.max(0,ke(n.kerfMm,3)),allowanceMm:Math.max(0,ke(n.allowanceMm,0)),endTrimMm:Math.max(0,ke(n.endTrimMm,0)),spliceOverlapMm:Math.max(0,ke(n.spliceOverlapMm,200)),stockMode:n.stockMode==="auto"?"auto":"preferred",preferredStockMm:ke(n.preferredStockMm,6e3),defaultStockMm:ke(n.defaultStockMm,6e3)}}function dc(n){return["המידות הן חוץ-חוץ. המרווחים הם מרווח מרבי ממרכז למרכז.","אורך החיתוך מעוגל למ״מ. תוספת העיגון, אם הוזנה, מתווספת לעמודים בלבד.",`באופטימיזציה: עובי להב ${n.kerfMm} מ״מ בין חיתוכים, תוספת ${n.allowanceMm} מ״מ לכל חלק, וקצה מוט ${n.endTrimMm} מ״מ.`,`קורות ועמודים ארוכים מהמוט מחוברים בחפיפה של ${n.spliceOverlapMm} מ״מ. שלבים ומילוי מחוברים בקצה בלי חפיפה.`,"אין כאן בדיקת חוזק, תקן או מחיר. יש לאשר את החתך מול הספק לפני הזמנה."]}function ke(n,e=0){const t=Number(n);return Number.isFinite(t)?t:e}function tn(n,e,t){return!n||!n.id?(t.push(`חסר פרופיל: ${e}`),!1):!0}function Kt(n,e){const t=ke(n.aMm,0),i=n.bMm==null?null:ke(n.bMm,0);return t>0?i>0?{a:t,b:i,partial:!1}:(e.push(`${n.name}: פורסמה מידה אחת בלבד. בשרטוט החתך מרובע לפי מידה זו.`),{a:t,b:t,partial:!0}):(e.push(`${n.name}: חתך לא אומת. בשרטוט מוצג 40×40 מ״מ, והאורך ברשימה אינו תלוי בחתך.`),{a:40,b:40,partial:!0})}function Ji(n){return{face:Math.max(n.a,n.b),thick:Math.min(n.a,n.b)}}function Ja(n){return{plan:Math.min(n.a,n.b),drop:Math.max(n.a,n.b)}}function ct(n,e,t,i,s,r){const a=Math.round(i);a>0&&n.push({profileId:e.id,profileName:e.name,catalogNumber:e.catalogNumber||null,source:e.source||"",generic:!!e.generic,label:t,nominalMm:a,cutMm:a+s.allowanceMm,qty:1,spliceMm:r,kind:"linear"})}function ya(n){const e=new Map;for(const t of n){const i=[t.profileId,t.label,t.nominalMm,t.cutMm,t.spliceMm].join("|"),s=e.get(i);s?s.qty+=t.qty:e.set(i,{...t})}return[...e.values()]}function Ta(n){return{id:n.id,name:n.name,catalogNumber:n.catalogNumber||null,source:n.source||"",generic:!!n.generic,kind:n.kind||"linear",aMm:n.aMm??null,bMm:n.bMm??null,kgPerM:n.kgPerM??null,stockLengthsMm:n.stockLengthsMm||[],sheetWidthMm:n.sheetWidthMm,sheetLengthMm:n.sheetLengthMm,coverWidthMm:n.coverWidthMm,thicknessMm:n.thicknessMm??null}}function fc(n,e,t,i,s){var Te,Ae,Ne,tt,ze,ot,U,Et,Be;const r=n.mount==="free"?"free":"wall",a=n.roof==="panel"?"panel":"slats",o=Math.round(ke(n.lengthMm)),l=Math.round(ke(n.depthMm)),c=Math.round(ke(n.heightMm)),h=Math.round(ke(n.wallHeightMm,c)),d=Math.round(ke(n.postSpacingMm)),f=Math.round(ke(n.rafterSpacingMm)),m=Math.max(0,Math.round(ke(n.overhangMm))),g=Math.max(0,Math.round(ke(n.slatGapMm))),M=Math.max(0,Math.round(ke(n.slatClearanceMm))),p=Math.max(0,Math.round(ke(n.embedMm))),u=n.slatMode==="between"?"between":"continuous";(!(o>0)||!(l>0)||!(c>0))&&s.push("יש להזין אורך, עומק וגובה גדולים מאפס"),(!(d>0)||!(f>0))&&s.push("מרווח העמודים ומרווח הקורות חייבים להיות גדולים מאפס");const w=(Te=n.profiles)==null?void 0:Te.post,T=(Ae=n.profiles)==null?void 0:Ae.beam,E=(Ne=n.profiles)==null?void 0:Ne.rafter;if(!tn(w,"עמוד",s)||!tn(T,"קורה",s)||!tn(E,"קורת משנה",s)||a==="slats"&&!tn((tt=n.profiles)==null?void 0:tt.slat,"שלב",s)||a==="panel"&&!tn((ze=n.profiles)==null?void 0:ze.panel,"לוח",s)||s.length)return null;const k=Kt(w,i),R=Kt(T,i),A=Kt(E,i),L={along:k.a,depth:k.b},b=Ja(R),S=Ja(A);t.push(r==="wall"?"פרגולה צמודת קיר: עמודים רק בחזית. קורת קיר וקורה קדמית באורך מלא, בלי ניכוי פינות.":"פרגולה עומדת: עמודים לאורך שני הצדדים הארוכים. מסגרת היקפית משתי קורות אורך ושתי קורות רוחב, והקורות המשניות ביניהן."),t.push("הקורות המשניות יושבות מעל הקורות הראשיות. אורך החיתוך שלהן הוא העומק ועוד תוספת הבליטה.");const x=o-L.along;if(!(x>0))return s.push("האורך קצר מרוחב העמוד"),null;const F=Os(x,d);if(F.error)return s.push(F.error),null;const C=nr(L.along/2,F.parts),V=l-L.depth/2,$=L.depth/2,N=r==="wall"?C.map(ge=>({x:ge,z:V})):C.flatMap(ge=>[{x:ge,z:$},{x:ge,z:V}]),H=[];let O=[];if(r==="wall"){H.push({axis:"x",x:o/2,z:b.plan/2,length:o,role:"wall"}),H.push({axis:"x",x:o/2,z:V,length:o,role:"front"});const ge=o-S.plan;if(!(ge>0))return s.push("האורך קצר מרוחב הקורה המשנית"),null;const Me=Os(ge,f);O=nr(S.plan/2,Me.parts)}else{const ge=C[0],Me=C[C.length-1];H.push({axis:"x",x:o/2,z:$,length:o,role:"long"}),H.push({axis:"x",x:o/2,z:V,length:o,role:"long"}),H.push({axis:"z",x:ge,z:l/2,length:l,role:"short"}),H.push({axis:"z",x:Me,z:l/2,length:l,role:"short"});const Pe=Me-ge;if(!(Pe>0))return s.push("האורך קצר מרוחב הקורה"),null;const de=Os(Pe,f);O=nr(ge,de.parts).slice(1,-1)}const Q=l+m,q=[],ue=c+p;for(const ge of N)ct(q,w,"עמוד",ue,e,e.spliceOverlapMm);for(const ge of H){const Me=ge.role==="wall"?"קורת קיר":ge.role==="front"?"קורה קדמית":ge.role==="short"?"קורה רוחבית":"קורה אורכית";ct(q,T,Me,ge.length,e,e.spliceOverlapMm)}for(const ge of O)ct(q,E,"קורת משנה",Q,e,e.spliceOverlapMm);const ye=l+m,He=[],j=[];let ee=[],fe=null;if(a==="slats"){const ge=n.profiles.slat,Me=Kt(ge,i),Pe=Ji(Me),de=Qi(ye,Pe.face,g);de<1&&i.push("העומק קצר מרוחב השלב — לא נספרו שלבים"),fe={count:de,face:Pe.face,thick:Pe.thick,gap:g,mode:u};const y=de>0?de*Pe.face+(de-1)*g:0,_=(ye-y)/2,B=[];for(let Y=0;Y<de;Y+=1)B.push(_+Pe.face/2+Y*(Pe.face+g));if(u==="continuous"){t.push("שלבים רצופים לאורך הפרגולה, חיתוך באורך החוץ.");for(const Y of B)He.push({x0:0,x1:o,z:Y,length:o,face:Pe.face,thick:Pe.thick}),ct(q,ge,"שלב הצללה",o,e,0)}else{t.push("שלבים במקטעים בין הקורות המשניות. אורך המקטע הוא המרחק בין הפנים פחות מרווח ההתאמה.");const Y=r==="wall"?O:[C[0],...O,C[C.length-1]];for(let Z=0;Z<Y.length-1;Z+=1){const K=Y[Z+1]-Y[Z],ve=r==="wall"?S.plan:pc(Y,Z,b.plan,S.plan),oe=Math.round(K-ve)-M;if(!(oe>0)){i.push("מקטע בין קורות קצר מדי לשלב");continue}const Ve=(K-oe)/2;for(const te of B)He.push({x0:Y[Z]+Ve,x1:Y[Z]+Ve+oe,z:te,length:oe,face:Pe.face,thick:Pe.thick}),ct(q,ge,"שלב הצללה",oe,e,0)}}}else{const ge=n.profiles.panel;t.push("הלוחות מונחים לאורך העומק, בלי סיבוב, כדי שכיוון הצלעות יהיה עם השיפוע. כל מודול נספר כרוחב כיסוי מלא.");const Me=Math.round(ke(n.coverMm)),Pe=Me>0?{...ge,coverWidthMm:Me}:ge,de=mc({lengthMm:o,depthMm:ye,panel:Pe});if(de.error)return s.push(de.error),null;ee=[de.sheetPlan];for(const _ of de.pieces)j.push(_);const y=(ot=n.profiles)==null?void 0:ot.edge;y!=null&&y.id?(t.push("פרופיל שפה בהיקף: שני אורכים ושני עומקים."),ct(q,y,"פרופיל שפה",o,e,0),ct(q,y,"פרופיל שפה",o,e,0),ct(q,y,"פרופיל שפה",ye,e,0),ct(q,y,"פרופיל שפה",ye,e,0)):i.push("לא נבחר פרופיל שפה ללוחות")}return{layout:{kind:"pergola",mount:r,roof:a,lengthMm:o,depthMm:l,heightMm:c,wallHeightMm:r==="wall"?Math.max(h,c):0,overhangMm:m,post:L,beam:b,rafter:S,posts:N,beams:H,rafters:O.map(ge=>({x:ge,z0:0,z1:Q,plan:S.plan,drop:S.drop})),slats:He,panels:j,slatMeta:fe},lines:ya(q),profiles:[w,T,E,(U=n.profiles)==null?void 0:U.slat,(Et=n.profiles)==null?void 0:Et.edge,(Be=n.profiles)==null?void 0:Be.panel].filter(Boolean).map(Ta),sheetPlans:ee}}function pc(n,e,t,i){const s=e===0?t:i,r=e===n.length-2?t:i;return(s+r)/2}function nr(n,e){const t=[n];let i=n;for(const s of e)i+=s,t.push(i);return t}function mc({lengthMm:n,depthMm:e,panel:t}){const i=Math.round(ke(t.coverWidthMm)),s=Math.round(ke(t.sheetWidthMm)),r=Math.round(ke(t.sheetLengthMm));if(!(i>0)||!(s>0)||!(r>0))return{error:"חסרות מידות הלוח"};const a=Math.max(1,Math.ceil(n/i-1e-9)),o=hl(e,r,0,0);if(!o.ok)return{error:o.error};const l=[];let c=0,h=0,d=0;for(const g of o.pieces){const M=lc({pieceW:i,pieceL:g,sheetW:s,sheetL:r,qty:a,allowRotate:!1});if(!M.ok)return{error:"הלוח קטן מהמודול שנבחר"};c+=M.sheets;let p=0;for(let u=0;u<a;u+=1){const w=Math.min(i,n-p);l.push({x:p,z:d,w,d:g,course:g}),h+=w*g,p+=i}d+=g}const f=s*r,m=c*f;return{pieces:l,sheetPlan:{kind:"sheet",profileId:t.id,profileName:t.name,catalogNumber:t.catalogNumber||null,source:t.source||"",generic:!!t.generic,stockMm:r,stockLabel:`${s}×${r} מ״מ`,barCount:c,wasteMm:0,wastePct:m?Math.max(0,(m-h)/m):0,wasteAreaMm2:Math.max(0,m-h),pieceCount:l.length,bars:o.pieces.map((g,M)=>({index:M+1,stockMm:r,cuts:[{lengthMm:g,label:`לוח ${i} מ״מ`,nominalMm:g,part:null,parts:null}],usedMm:g,wasteMm:r-g,qty:a})),error:null,kgPerM:null,stockAssumed:!1}}}function gc(n,e,t,i,s){var C,V,$;const r=Math.round(ke(n.lengthMm)),a=Math.round(ke(n.heightMm)),o=Math.round(ke(n.postSpacingMm)),l=Math.max(0,Math.round(ke(n.slatGapMm))),c=Math.max(0,Math.round(ke(n.bottomMm))),h=Math.max(0,Math.round(ke(n.topMm))),d=Math.max(0,Math.round(ke(n.slatClearanceMm))),f=Math.max(0,Math.round(ke(n.hingeGapMm,10))),m=Math.max(0,Math.round(ke(n.embedMm))),g=(C=n.profiles)==null?void 0:C.post,M=(V=n.profiles)==null?void 0:V.slat,p=($=n.profiles)==null?void 0:$.frame;if((!(r>0)||!(a>0))&&s.push("יש להזין אורך וגובה גדולים מאפס"),o>0||s.push("מרווח העמודים חייב להיות גדול מאפס"),!tn(g,"עמוד",s)||!tn(M,"שלב",s)||s.length)return null;const u=Kt(g,i),w=Kt(M,i),T={along:u.a,depth:u.b},E=Ji(w),k=_c(n.gates),R=ul({lengthMm:r,postAlong:T.along,postSpacingMm:o,gates:k});if(!R.ok)return s.push(...R.errors),null;i.push(...R.warnings),t.push("גדר שלבים אופקיים. רוחב השער הוא מפתח נקי בין העמודים. עמודי המזוזה כלולים בעמודי הגדר."),t.push("כשאין מיקום מדויק, המקטעים השווים שבין השערים מחולקים שווה בשווה. מקטע קצר מרוחב העמוד ועוד 40 מ״מ מאוחד.");const A=Qi(a-c-h,E.face,l);A<1&&i.push("הגובה הפנוי נמוך מרוחב השלב");const L=[],b=a+m;for(const N of R.posts)ct(L,g,N.role==="jamb"?"עמוד מזוזה":"עמוד גדר",b,e,e.spliceOverlapMm);const S=[];for(const N of R.bays){const H=N.clear-d;if(S.push({...N,slatLen:H}),H>0&&A>0)for(let O=0;O<A;O+=1)ct(L,M,"שלב גדר",H,e,0);else N.clear>0&&i.push("שלב במקטע יצא קצר מאפס אחרי מרווח ההתאמה")}const x=[],F=p!=null&&p.id?Kt(p,i):null;R.gates.length&&!(p!=null&&p.id)&&i.push("יש שערים בלי פרופיל מסגרת — נספרו העמודים והמפתחים בלבד");for(const N of R.gates){const H=N.left+T.along/2+f/2,O=N.right-T.along/2-f/2,Q=Math.round(O-H),q={kind:N.kind,left:N.left,right:N.right,clear:N.clear,leafLeft:H,leafRight:O,leafW:Q,stileW:F?F.a:0,railH:F?F.b:0,railLen:0,braceLen:0,innerH:0,infillRows:0,infillLen:0};if(F&&Q>0){const ue=Q-2*F.a,ye=a-2*F.b;if(q.railLen=ue,q.innerH=ye,ue>0&&ye>0){ct(L,p,N.kind==="ped"?"ניצב פשפש":"ניצב שער",a,e,0),ct(L,p,N.kind==="ped"?"ניצב פשפש":"ניצב שער",a,e,0),ct(L,p,N.kind==="ped"?"סורג פשפש":"סורג שער",ue,e,0),ct(L,p,N.kind==="ped"?"סורג פשפש":"סורג שער",ue,e,0);const He=Math.round(Math.hypot(ue,ye));q.braceLen=He,ct(L,p,N.kind==="ped"?"אלכסון פשפש":"אלכסון שער",He,e,0);const j=Qi(ye,E.face,l),ee=ue-d;if(q.infillRows=j,q.infillLen=ee,ee>0)for(let fe=0;fe<j;fe+=1)ct(L,M,N.kind==="ped"?"שלב פשפש":"שלב שער",ee,e,0)}else i.push("מסגרת השער לא נכנסת במפתח — בדקו רוחב הפרופיל")}x.push(q)}return t.push("כנף השער צרה מהמפתח במרווח הציר. הניצבים בגובה המלא, הסורגים ביניהם, ואלכסון אחד."),{layout:{kind:"fence",lengthMm:r,heightMm:a,post:T,slat:{...E,gap:l,rows:A,bottom:c,top:h,clearance:d},posts:R.posts,bays:S,gates:x},lines:ya(L),profiles:[g,M,p].filter(Boolean).map(Ta),sheetPlans:[]}}function _c(n){const e=[];for(const t of n||[]){const i=Math.max(0,Math.round(ke(t.qty,1))),s=Math.round(ke(t.widthMm??Math.round(ke(t.widthM)*1e3))),r=t.kind==="ped"?"ped":"gate";for(let a=0;a<i;a+=1)e.push({widthMm:s,kind:r})}return e}function ul({lengthMm:n,postAlong:e,postSpacingMm:t,gates:i}){if(!(e>0))return{ok:!1,errors:["רוחב העמוד לא תקין"]};if(n<e)return{ok:!1,errors:["האורך קצר מרוחב העמוד"]};const s=n-e;let r=0;for(const p of i){if(!(p.widthMm>0))return{ok:!1,errors:["רוחב שער לא תקין"]};r+=p.widthMm+e}if(r>s)return{ok:!1,errors:["סך המפתחים רחב מהגדר"]};const a=s-r,o=i.length===0?1:i.length+1,l=e+Za,c=ic(Ir(a,o),l),h=[];c.some((p,u)=>p!==Ir(a,o)[u])&&h.push("מקטע קצר בין שערים אוחד עם מקטע סמוך");const d=[];for(const p of c){if(p<=0){d.push([]);continue}if(p<e)return{ok:!1,errors:["נותר מרווח קצר שלא ניתן לסגור עם רוחב העמוד"]};const u=Os(p,t);d.push(u.parts),p-e<Za&&h.push("מקטע שלבים קצר מהרגיל")}const f=[],m=[],g=[];let M=e/2;f.push({x:M,role:"end"});for(let p=0;p<d.length;p+=1){for(const u of d[p]){const w=M;M+=u,m.push({left:w,right:M,bay:u,clear:u-e}),f.push({x:M,role:"line"})}if(p<i.length){const u=i[p],w=M;f[f.length-1].role="jamb",M+=u.widthMm+e,g.push({left:w,right:M,clear:u.widthMm,kind:u.kind}),f.push({x:M,role:"jamb"})}}return f[0].role!=="jamb"&&(f[0].role="end"),f[f.length-1].role!=="jamb"&&(f[f.length-1].role="end"),{ok:!0,errors:[],warnings:h,posts:f,bays:m,gates:g}}function Mc(n,e,t,i,s){var C,V,$,N;const r=Math.round(ke(n.lengthMm)),a=Math.round(ke(n.heightMm)),o=Math.round(ke(n.postSpacingMm)),l=Math.max(0,Math.round(ke(n.gapMm,100))),c=Math.max(0,Math.round(ke(n.slatClearanceMm))),h=Math.max(0,Math.round(ke(n.embedMm))),d=n.infill==="horizontal"||n.infill==="none"?n.infill:"vertical",f=(C=n.profiles)==null?void 0:C.post,m=(V=n.profiles)==null?void 0:V.handrail,g=($=n.profiles)==null?void 0:$.bottom,M=(N=n.profiles)==null?void 0:N.infill;if((!(r>0)||!(a>0))&&s.push("יש להזין אורך וגובה גדולים מאפס"),o>0||s.push("מרווח העמודים חייב להיות גדול מאפס"),!tn(f,"עמוד מעקה",s)||!tn(m,"מאחז יד",s)||d!=="none"&&!tn(M,"מילוי",s)||s.length)return null;const p=Kt(f,i),u=Kt(m,i),w={along:p.a,depth:p.b},T=Ji(u),E=g!=null&&g.id?Ji(Kt(g,i)):{face:0,thick:0},k=M!=null&&M.id?Ji(Kt(M,i)):null,R=ul({lengthMm:r,postAlong:w.along,postSpacingMm:o,gates:[]});if(!R.ok)return s.push(...R.errors),null;t.push("מעקה: עמודים לפי מרווח מרבי, מאחז יד רצוף ומסילה תחתונה רצופה. גובה נפוץ למרפסת הוא 1.05 מ׳ — יש לבדוק את הדרישה בפרויקט.");const A=a-T.face-E.face,L=[],b=a+h;for(const H of R.posts)ct(L,f,"עמוד מעקה",b,e,e.spliceOverlapMm);ct(L,m,"מאחז יד",r,e,e.spliceOverlapMm),g!=null&&g.id&&ct(L,g,"מסילה תחתונה",r,e,e.spliceOverlapMm);const S=[],x=[];let F=0;if(d==="horizontal"&&k){F=Qi(A,k.face,l),t.push("מילוי אופקי בין העמודים.");for(const H of R.bays){const O=H.clear-c;if(S.push({...H,slatLen:O}),O>0)for(let Q=0;Q<F;Q+=1)ct(L,M,"מילוי אופקי",O,e,0)}}else if(d==="vertical"&&k){t.push("מילוי אנכי. מספר המוטות בכל מפתח לפי רוחב המוט והמרווח המרבי.");for(const H of R.bays){const O=Qi(H.clear,k.face,l);S.push({...H,count:O});const Q=O>0?O*k.face+(O-1)*l:0,q=(H.clear-Q)/2;for(let ue=0;ue<O;ue+=1){const ye=H.left+w.along/2+q+k.face/2+ue*(k.face+l);x.push({x:ye,length:A}),ct(L,M,"זקף",A,e,0)}}}else{t.push("בלי מילוי אלומיניום — למשל זכוכית שאינה נספרת כאן.");for(const H of R.bays)S.push(H)}return{layout:{kind:"railing",lengthMm:r,heightMm:a,infill:d,post:w,hand:T,bottom:E,fill:k,gapMm:l,rows:F,usable:A,posts:R.posts,bays:S,balusters:x},lines:ya(L),profiles:[f,m,g,M].filter(Boolean).map(Ta),sheetPlans:[]}}const Zn="#2a2622",es="#d5d8dc",ss="#7d868e",$s="#b7bdc2",Pi="#9c4221",wa="#f7f3ec",ji="#5c656c";function Nr(n){return n?n.kind==="pergola"?vc(n):n.kind==="fence"?Qa(n,"גדר"):Qa(n,"מעקה"):fl("אין שרטוט")}function dl(n){return n?n.kind==="pergola"?xc(n):n.kind==="fence"?Sc(n):bc(n):fl("אין שרטוט")}function fl(n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200" role="img"><rect width="360" height="200" fill="${wa}"/><text x="180" y="104" text-anchor="middle" fill="#6b645c" font-size="16" font-family="Noto Sans Hebrew, sans-serif">${n}</text></svg>`}function rn(n){return`${(n/1e3).toFixed(2)} מ׳`}function vc(n){var m;const s=280/Math.max(n.lengthMm,n.depthMm+n.overhangMm,1),r=54+n.lengthMm*s+28,a=n.depthMm+n.overhangMm,o=36+a*s+46,l=g=>54+g*s,c=g=>36+g*s,h=[`<rect width="${r}" height="${o}" fill="${wa}"/>`];n.mount==="wall"&&(h.push(`<rect x="${l(-80)}" y="${c(-70)}" width="${(n.lengthMm+160)*s}" height="${70*s}" fill="#e4d9c8" stroke="${Zn}" stroke-width="1"/>`),h.push(Un((l(0)+l(n.lengthMm))/2,c(-36),"קיר",13))),h.push(`<rect x="${l(0)}" y="${c(0)}" width="${n.lengthMm*s}" height="${n.depthMm*s}" fill="none" stroke="${Zn}" stroke-width="1.4"/>`);for(const g of n.rafters)h.push(`<line x1="${l(g.x)}" y1="${c(g.z0)}" x2="${l(g.x)}" y2="${c(Math.min(g.z1,a))}" stroke="${$s}" stroke-width="${Math.max(2,g.plan*s)}"/>`);const d=n.slats||[],f=d.length>48?Math.ceil(d.length/48):1;d.forEach((g,M)=>{M%f||h.push(`<line x1="${l(g.x0)}" y1="${c(g.z)}" x2="${l(g.x1)}" y2="${c(g.z)}" stroke="#9aa2a8" stroke-width="${Math.max(1,g.face*s*.45)}"/>`)});for(const g of n.panels||[])h.push(`<rect x="${l(g.x)}" y="${c(g.z)}" width="${g.w*s}" height="${g.d*s}" fill="#7eb4d266" stroke="#3d6f8c" stroke-width="1"/>`);for(const g of n.posts){const M=n.post.along*s;h.push(`<rect x="${l(g.x)-M/2}" y="${c(g.z)-M/2}" width="${M}" height="${M}" fill="${ss}" stroke="${Zn}" stroke-width="1"/>`)}return h.push(rs(l(0),l(n.lengthMm),o-18,rn(n.lengthMm))),h.push(Ks(c(0),c(n.depthMm),18,rn(n.depthMm))),(m=n.slatMeta)!=null&&m.count&&h.push(Un(r/2,16,`${n.slatMeta.count} שלבים`,13)),as(r,o,h.join(""))}function xc(n){var h,d,f;const e=n.beam.drop+n.rafter.drop+(((h=n.slatMeta)==null?void 0:h.thick)||16),t=n.heightMm+e,{x:i,y:s,w:r,h:a,exaggerated:o}=Aa(n.lengthMm,t,46),l=[js(r,a)];l.push(`<line x1="${i(0)}" y1="${s(0)}" x2="${i(n.lengthMm)}" y2="${s(0)}" stroke="#8a8175" stroke-width="2"/>`);for(const m of yc(n.posts))l.push(St(i(m.x-n.post.along/2),s(n.heightMm),n.post.along*i.scale,n.heightMm*s.scale,ss));l.push(St(i(0),s(n.heightMm+n.beam.drop),n.lengthMm*i.scale,n.beam.drop*s.scale,$s)),l.push(St(i(0),s(t),n.lengthMm*i.scale,(n.rafter.drop+(((d=n.slatMeta)==null?void 0:d.thick)||12))*s.scale,es)),n.roof==="panel"&&l.push(St(i(0),s(t),n.lengthMm*i.scale,14*s.scale,"#7eb4d2")),l.push(rs(i(0),i(n.lengthMm),a-16,rn(n.lengthMm))),l.push(Ks(s(0),s(n.heightMm),16,rn(n.heightMm)));const c=n.slatMeta?`${n.slatMeta.count} שלבים`:`${((f=n.panels)==null?void 0:f.length)||0} מודולי לוח`;return l.push(Un(r/2,16,o?`${c} · הגובה הוגדל, המידות נכונות`:c,12)),as(r,a,l.join(""))}function Sc(n){const{x:e,y:t,w:i,h:s,exaggerated:r}=Aa(n.lengthMm,n.heightMm,52),a=[js(i,s)];a.push(`<line x1="${e(0)}" y1="${t(0)}" x2="${e(n.lengthMm)}" y2="${t(0)}" stroke="#8a8175" stroke-width="2"/>`);for(const l of n.bays){if(!(l.slatLen>0)||!n.slat.rows)continue;const c=(l.left+l.right)/2-l.slatLen/2;for(let h=0;h<n.slat.rows;h+=1){const d=n.slat.bottom+h*(n.slat.face+n.slat.gap);a.push(St(e(c),t(d+n.slat.face),l.slatLen*e.scale,n.slat.face*t.scale,es))}}for(const l of n.gates)Ec(a,l,n,e,t);for(const l of n.posts)a.push(St(e(l.x-n.post.along/2),t(n.heightMm),n.post.along*e.scale,n.heightMm*t.scale,l.role==="jamb"?"#5e676e":ss));a.push(rs(e(0),e(n.lengthMm),s-16,rn(n.lengthMm))),a.push(Ks(t(0),t(n.heightMm),16,rn(n.heightMm)));const o=r?"הגובה בשרטוט הוגדל":`${n.slat.rows} שורות`;return a.push(Un(i/2,s-6,o,11)),as(i,s,a.join(""))}function Ec(n,e,t,i,s){if(!(e.stileW>0)){n.push(Un(i((e.left+e.right)/2),s(t.heightMm/2),e.kind==="ped"?"פשפש":"שער",13));return}const r=t.heightMm;if(n.push(St(i(e.leafLeft),s(r),e.stileW*i.scale,r*s.scale,ji)),n.push(St(i(e.leafRight-e.stileW),s(r),e.stileW*i.scale,r*s.scale,ji)),n.push(St(i(e.leafLeft+e.stileW),s(r),e.railLen*i.scale,e.railH*s.scale,ji)),n.push(St(i(e.leafLeft+e.stileW),s(e.railH),e.railLen*i.scale,e.railH*s.scale,ji)),e.infillRows>0&&e.infillLen>0){const a=t.slat.face,o=t.slat.gap,l=e.innerH,c=e.infillRows*a+(e.infillRows-1)*o;let h=e.railH+(l-c)/2;for(let d=0;d<e.infillRows;d+=1)n.push(St(i(e.leafLeft+e.stileW),s(h+a),e.infillLen*i.scale,a*s.scale,es)),h+=a+o}n.push(`<line x1="${i(e.leafLeft+e.stileW)}" y1="${s(e.railH)}" x2="${i(e.leafRight-e.stileW)}" y2="${s(r-e.railH)}" stroke="${Pi}" stroke-width="2.4"/>`),n.push(Un(i((e.leafLeft+e.leafRight)/2),s(t.heightMm*.55),`${e.kind==="ped"?"פשפש":"שער"} ${rn(e.clear)}`,12))}function bc(n){var o;const{x:e,y:t,w:i,h:s,exaggerated:r}=Aa(n.lengthMm,n.heightMm,48),a=[js(i,s)];if(a.push(`<line x1="${e(0)}" y1="${t(0)}" x2="${e(n.lengthMm)}" y2="${t(0)}" stroke="#8a8175" stroke-width="2"/>`),n.bottom.face>0&&a.push(St(e(0),t(n.bottom.face),n.lengthMm*e.scale,n.bottom.face*t.scale,$s)),a.push(St(e(0),t(n.heightMm),n.lengthMm*e.scale,n.hand.face*t.scale,$s)),n.infill==="horizontal"&&n.fill&&n.rows>0){const l=n.usable,c=n.rows*n.fill.face+(n.rows-1)*n.gapMm;for(const h of n.bays){if(!(h.slatLen>0))continue;const d=(h.left+h.right)/2-h.slatLen/2;let f=n.bottom.face+(l-c)/2;for(let m=0;m<n.rows;m+=1)a.push(St(e(d),t(f+n.fill.face),h.slatLen*e.scale,n.fill.face*t.scale,es)),f+=n.fill.face+n.gapMm}}for(const l of n.balusters||[]){const c=((o=n.fill)==null?void 0:o.face)||20;a.push(St(e(l.x-c/2),t(n.bottom.face+l.length),c*e.scale,l.length*t.scale,es))}for(const l of n.posts)a.push(St(e(l.x-n.post.along/2),t(n.heightMm),n.post.along*e.scale,n.heightMm*t.scale,ss));return a.push(rs(e(0),e(n.lengthMm),s-16,rn(n.lengthMm))),a.push(Ks(t(0),t(n.heightMm),16,rn(n.heightMm))),a.push(Un(i/2,16,r?"הגובה הוגדל בשרטוט, המידות נכונות":"חזית",12)),as(i,s,a.join(""))}function Qa(n,e){const s=290/Math.max(n.lengthMm,1),r=358,a=150,o=c=>48+c*s,l=[js(r,a)];l.push(`<line x1="${o(0)}" y1="78" x2="${o(n.lengthMm)}" y2="78" stroke="${Zn}" stroke-width="3"/>`);for(const c of n.posts){const h=Math.max(8,n.post.along*s);l.push(`<rect x="${o(c.x)-h/2}" y="${78-h/2}" width="${h}" height="${h}" fill="${c.role==="jamb"?ji:ss}" stroke="${Zn}"/>`)}for(const c of n.gates||[])l.push(`<line x1="${o(c.left)}" y1="78" x2="${o(c.right)}" y2="78" stroke="${Pi}" stroke-width="4"/>`);return l.push(rs(o(0),o(n.lengthMm),124,rn(n.lengthMm))),l.push(Un(r/2,28,`${e} · מבט על`,14)),as(r,a,l.join(""))}function Aa(n,e,t){const s=268/Math.max(n,1);let r=s,a=!1;e*r<268*.42&&(r=268*.46/Math.max(e,1),a=!0);const o=28,l=42,c=t+268+18,h=o+e*r+l;return{exaggerated:a,w:c,h,x:Object.assign(d=>t+d*s,{scale:s}),y:Object.assign(d=>o+(e-d)*r,{scale:r})}}function js(n,e){return`<rect width="${n}" height="${e}" fill="${wa}"/>`}function St(n,e,t,i,s){return`<rect x="${n}" y="${e}" width="${Math.max(t,.8)}" height="${Math.max(i,.8)}" fill="${s}" stroke="${Zn}" stroke-width="1"/>`}function rs(n,e,t,i){const s=Math.min(n,e),r=Math.max(n,e);return`<g fill="none" stroke="${Pi}" stroke-width="1.2">
    <line x1="${s}" y1="${t}" x2="${r}" y2="${t}"/>
    <line x1="${s}" y1="${t-5}" x2="${s}" y2="${t+5}"/>
    <line x1="${r}" y1="${t-5}" x2="${r}" y2="${t+5}"/>
    <text x="${(s+r)/2}" y="${t-7}" fill="${Pi}" stroke="none" text-anchor="middle" font-size="13" font-family="Noto Sans Hebrew, sans-serif">${i}</text>
  </g>`}function Ks(n,e,t,i){const s=Math.min(n,e),r=Math.max(n,e);return`<g fill="none" stroke="${Pi}" stroke-width="1.2">
    <line x1="${t}" y1="${s}" x2="${t}" y2="${r}"/>
    <line x1="${t-5}" y1="${s}" x2="${t+5}" y2="${s}"/>
    <line x1="${t-5}" y1="${r}" x2="${t+5}" y2="${r}"/>
    <text x="${t+8}" y="${(s+r)/2}" fill="${Pi}" stroke="none" font-size="13" font-family="Noto Sans Hebrew, sans-serif" transform="rotate(-90 ${t+8} ${(s+r)/2})">${i}</text>
  </g>`}function Un(n,e,t,i){return`<text x="${n}" y="${e}" text-anchor="middle" fill="${Zn}" font-size="${i}" font-family="Noto Sans Hebrew, sans-serif">${t}</text>`}function yc(n){const e=new Set;return n.filter(t=>{const i=Math.round(t.x);return e.has(i)?!1:(e.add(i),!0)})}function as(n,e,t){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n.toFixed(1)} ${e.toFixed(1)}" role="img" aria-label="שרטוט">${t}</svg>`}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="170",wi={ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tc=0,eo=1,wc=2,pl=1,Ac=2,mn=3,In=0,Pt=1,gn=2,Ln=0,Ai=1,to=2,no=3,io=4,Rc=5,qn=100,Cc=101,Pc=102,Lc=103,Dc=104,Uc=200,Ic=201,Nc=202,Fc=203,Fr=204,Or=205,Oc=206,kc=207,Bc=208,zc=209,Vc=210,Hc=211,Gc=212,Wc=213,$c=214,kr=0,Br=1,zr=2,Li=3,Vr=4,Hr=5,Gr=6,Wr=7,ml=0,Xc=1,qc=2,Dn=0,Yc=1,jc=2,Kc=3,Zc=4,Jc=5,Qc=6,eh=7,gl=300,Di=301,Ui=302,$r=303,Xr=304,Zs=306,qr=1e3,jn=1001,Yr=1002,kt=1003,th=1004,ps=1005,nn=1006,ir=1007,Kn=1008,xn=1009,_l=1010,Ml=1011,ts=1012,Ca=1013,ei=1014,sn=1015,os=1016,Pa=1017,La=1018,Ii=1020,vl=35902,xl=1021,Sl=1022,Zt=1023,El=1024,bl=1025,Ri=1026,Ni=1027,Da=1028,Ua=1029,yl=1030,Ia=1031,Na=1033,ks=33776,Bs=33777,zs=33778,Vs=33779,jr=35840,Kr=35841,Zr=35842,Jr=35843,Qr=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,aa=37812,oa=37813,la=37814,ca=37815,ha=37816,ua=37817,da=37818,fa=37819,pa=37820,ma=37821,Hs=36492,ga=36494,_a=36495,Tl=36283,Ma=36284,va=36285,xa=36286,nh=3200,ih=3201,wl=0,sh=1,Pn="",Vt="srgb",Oi="srgb-linear",Js="linear",Qe="srgb",li=7680,so=519,rh=512,ah=513,oh=514,Al=515,lh=516,ch=517,hh=518,uh=519,ro=35044,ao="300 es",Mn=2e3,Xs=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,Sa=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function dh(n,e){return(n%e+e)%e}function sr(n,e,t){return(1-t)*n+t*e}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fh={DEG2RAD:Gs};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,s,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],M=s[0],p=s[3],u=s[6],w=s[1],T=s[4],E=s[7],k=s[2],R=s[5],A=s[8];return r[0]=a*M+o*w+l*k,r[3]=a*p+o*T+l*R,r[6]=a*u+o*E+l*A,r[1]=c*M+h*w+d*k,r[4]=c*p+h*T+d*R,r[7]=c*u+h*E+d*A,r[2]=f*M+m*w+g*k,r[5]=f*p+m*T+g*R,r[8]=f*u+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(s*c-h*i)*M,e[2]=(o*i-s*a)*M,e[3]=f*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new Ue;function Rl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ph(){const n=qs("canvas");return n.style.display="block",n}const oo={};function Ki(n){n in oo||(oo[n]=!0,console.warn(n))}function mh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function gh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _h(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(n.r=vn(n.r),n.g=vn(n.g),n.b=vn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pn?Js:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ci(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const lo=[.64,.33,.3,.6,.15,.06],co=[.2126,.7152,.0722],ho=[.3127,.329],uo=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fo=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Oi]:{primaries:lo,whitePoint:ho,transfer:Js,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:co,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:lo,whitePoint:ho,transfer:Qe,toXYZ:uo,fromXYZ:fo,luminanceCoefficients:co,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});let ci;class Mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=qs("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vn(t[i]/255)*255):t[i]=vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vh=0;class Cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ar(s[a].image)):r.push(ar(s[a]))}else r=ar(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ar(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xh=0;class Tt extends si{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=jn,s=jn,r=nn,a=Kn,o=Zt,l=xn,c=Tt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ls(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=gl;Tt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(m+1)/2,k=(u+1)/2,R=(h+f)/4,A=(d+M)/4,L=(g+p)/4;return T>E&&T>k?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=R/i,r=A/i):E>k?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=L/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=A/r,s=L/r),this.set(i,s,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-M)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Tt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Sh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pl extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eh extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(d!==M||l!==f||c!==m||h!==g){let p=1-o;const u=l*f+c*m+h*g+d*M,w=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const k=Math.sqrt(T),R=Math.atan2(k,u*w);p=Math.sin(p*R)/k,o=Math.sin(o*R)/k}const E=o*w;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,d=d*p+M*E,p===1-o){const k=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=k,c*=k,h*=k,d*=k}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-o*m,e[t+2]=c*g+h*m+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const or=new z,po=new ni;class kn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),gs.subVectors(this.max,Gi),hi.subVectors(e.a,Gi),ui.subVectors(e.b,Gi),di.subVectors(e.c,Gi),bn.subVectors(ui,hi),yn.subVectors(di,ui),zn.subVectors(hi,di);let t=[0,-bn.z,bn.y,0,-yn.z,yn.y,0,-zn.z,zn.y,bn.z,0,-bn.x,yn.z,0,-yn.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-yn.y,yn.x,0,-zn.y,zn.x,0];return!lr(t,hi,ui,di,gs)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,hi,ui,di,gs))?!1:(_s.crossVectors(bn,yn),t=[_s.x,_s.y,_s.z],lr(t,hi,ui,di,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new z,new z,new z,new z,new z,new z,new z,new z],$t=new z,ms=new kn,hi=new z,ui=new z,di=new z,bn=new z,yn=new z,zn=new z,Gi=new z,gs=new z,_s=new z,Vn=new z;function lr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Vn.fromArray(n,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),h=i.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const bh=new kn,Wi=new z,cr=new z;class cs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(cr)),this.expandByPoint(Wi.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new z,hr=new z,Ms=new z,Tn=new z,ur=new z,vs=new z,dr=new z;class Ll{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hr.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(hr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=Tn.dot(this.direction),l=-Tn.dot(Ms),c=Tn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const M=1/h;d*=M,f*=M,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hr).addScaledVector(Ms,f),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),s=un.dot(un)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,s,r){ur.subVectors(t,e),vs.subVectors(i,e),dr.crossVectors(ur,vs);let a=this.direction.dot(dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(vs.crossVectors(Tn,vs));if(l<0)return null;const c=o*this.direction.dot(ur.cross(Tn));if(c<0||l+c>a)return null;const h=-o*Tn.dot(dr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,r,a,o,l,c,h,d,f,m,g,M,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,f,m,g,M,p)}set(e,t,i,s,r,a,o,l,c,h,d,f,m,g,M,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),a=1/fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,M=c*d;t[0]=f+M*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,M=c*d;t[0]=f-M*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=M-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-M*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+M,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yh,e,Th)}lookAt(e,t,i){const s=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),wn.crossVectors(i,Dt),wn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),wn.crossVectors(i,Dt)),wn.normalize(),xs.crossVectors(Dt,wn),s[0]=wn.x,s[4]=xs.x,s[8]=Dt.x,s[1]=wn.y,s[5]=xs.y,s[9]=Dt.y,s[2]=wn.z,s[6]=xs.z,s[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],M=i[6],p=i[10],u=i[14],w=i[3],T=i[7],E=i[11],k=i[15],R=s[0],A=s[4],L=s[8],b=s[12],S=s[1],x=s[5],F=s[9],C=s[13],V=s[2],$=s[6],N=s[10],H=s[14],O=s[3],Q=s[7],q=s[11],ue=s[15];return r[0]=a*R+o*S+l*V+c*O,r[4]=a*A+o*x+l*$+c*Q,r[8]=a*L+o*F+l*N+c*q,r[12]=a*b+o*C+l*H+c*ue,r[1]=h*R+d*S+f*V+m*O,r[5]=h*A+d*x+f*$+m*Q,r[9]=h*L+d*F+f*N+m*q,r[13]=h*b+d*C+f*H+m*ue,r[2]=g*R+M*S+p*V+u*O,r[6]=g*A+M*x+p*$+u*Q,r[10]=g*L+M*F+p*N+u*q,r[14]=g*b+M*C+p*H+u*ue,r[3]=w*R+T*S+E*V+k*O,r[7]=w*A+T*x+E*$+k*Q,r[11]=w*L+T*F+E*N+k*q,r[15]=w*b+T*C+E*H+k*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],M=e[7],p=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*m-i*l*m)+M*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+t*c*d-t*o*m-r*a*d+i*a*m+r*o*h-i*c*h)+u*(-s*o*h-t*l*d+t*o*f+s*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],M=e[13],p=e[14],u=e[15],w=d*p*c-M*f*c+M*l*m-o*p*m-d*l*u+o*f*u,T=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,E=h*M*c-g*d*c+g*o*m-a*M*m-h*o*u+a*d*u,k=g*d*l-h*M*l-g*o*f+a*M*f+h*o*p-a*d*p,R=t*w+i*T+s*E+r*k;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(M*f*r-d*p*r-M*s*m+i*p*m+d*s*u-i*f*u)*A,e[2]=(o*p*r-M*l*r+M*s*c-i*p*c-o*s*u+i*l*u)*A,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*m-i*l*m)*A,e[4]=T*A,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*u+t*f*u)*A,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*u-t*l*u)*A,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*m+t*l*m)*A,e[8]=E*A,e[9]=(g*d*r-h*M*r-g*i*m+t*M*m+h*i*u-t*d*u)*A,e[10]=(a*M*r-g*o*r+g*i*c-t*M*c-a*i*u+t*o*u)*A,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*m-t*o*m)*A,e[12]=k*A,e[13]=(h*M*s-g*d*s+g*i*f-t*M*f-h*i*p+t*d*p)*A,e[14]=(g*o*s-a*M*s-g*i*l+t*M*l+a*i*p-t*o*p)*A,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,M=a*h,p=a*d,u=o*d,w=l*c,T=l*h,E=l*d,k=i.x,R=i.y,A=i.z;return s[0]=(1-(M+u))*k,s[1]=(m+E)*k,s[2]=(g-T)*k,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(f+u))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(g+T)*A,s[9]=(p-w)*A,s[10]=(1-(f+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=fi.set(s[0],s[1],s[2]).length();const a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,h=1/a,d=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Mn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,g;if(o===Mn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Xs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Mn){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-r),f=(t+e)*c,m=(i+s)*h;let g,M;if(o===Mn)g=(a+r)*d,M=-2*d;else if(o===Xs)g=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fi=new z,Xt=new at,yh=new z(0,0,0),Th=new z(1,1,1),wn=new z,xs=new z,Dt=new z,mo=new at,go=new ni;class an{constructor(e=0,t=0,i=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return go.setFromEuler(this),this.setFromQuaternion(go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wh=0;const _o=new z,pi=new ni,dn=new at,Ss=new z,$i=new z,Ah=new z,Rh=new ni,Mo=new z(1,0,0),vo=new z(0,1,0),xo=new z(0,0,1),So={type:"added"},Ch={type:"removed"},mi={type:"childadded",child:null},fr={type:"childremoved",child:null};class _t extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new z,t=new an,i=new ni,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ue}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(Mo,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return _o.copy(e).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mo,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ss.copy(e):Ss.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt($i,Ss,this.up):dn.lookAt(Ss,$i,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(dn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(So),mi.child=e,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(So),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}_t.DEFAULT_UP=new z(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new z,fn=new z,pr=new z,pn=new z,gi=new z,_i=new z,Eo=new z,mr=new z,gr=new z,_r=new z,Mr=new ht,vr=new ht,xr=new ht;class jt{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qt.subVectors(s,t),fn.subVectors(i,t),pr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(fn),l=qt.dot(pr),c=fn.dot(fn),h=fn.dot(pr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Mr.setScalar(0),vr.setScalar(0),xr.setScalar(0),Mr.fromBufferAttribute(e,t),vr.fromBufferAttribute(e,i),xr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mr,r.x),a.addScaledVector(vr,r.y),a.addScaledVector(xr,r.z),a}static isFrontFacing(e,t,i,s){return qt.subVectors(i,t),fn.subVectors(e,t),qt.cross(fn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),qt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;gi.subVectors(s,i),_i.subVectors(r,i),mr.subVectors(e,i);const l=gi.dot(mr),c=_i.dot(mr);if(l<=0&&c<=0)return t.copy(i);gr.subVectors(e,s);const h=gi.dot(gr),d=_i.dot(gr);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gi,a);_r.subVectors(e,r);const m=gi.dot(_r),g=_i.dot(_r);if(g>=0&&m<=g)return t.copy(r);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(_i,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Eo.subVectors(r,s),o=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Eo,o);const u=1/(p+M+f);return a=M*u,o=f*u,t.copy(i).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Sr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=We.workingColorSpace){if(e=dh(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Sr(a,r,e+1/3),this.g=Sr(a,r,e),this.b=Sr(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=Ul[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return We.fromWorkingColorSpace(xt.copy(this),e),Math.round(yt(xt.r*255,0,255))*65536+Math.round(yt(xt.g*255,0,255))*256+Math.round(yt(xt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,s=xt.g,r=xt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Vt){We.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,s=xt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Es);const i=sr(An.h,Es.h,t),s=sr(An.s,Es.s,t),r=sr(An.l,Es.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new qe;qe.NAMES=Ul;let Ph=0;class hs extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ls(),this.name="",this.blending=Ai,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Or,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fr&&(i.blendSrc=this.blendSrc),this.blendDst!==Or&&(i.blendDst=this.blendDst),this.blendEquation!==qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Il extends hs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new z,bs=new Ie;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ro,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ro&&(e.usage=this.usage),e}}class Nl extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fl extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jn extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lh=0;const zt=new at,Er=new _t,Mi=new z,Ut=new kn,Xi=new kn,gt=new z;class ri extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?Fl:Nl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jn(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ut.min,Xi.min),Ut.expandByPoint(gt),gt.addVectors(Ut.max,Xi.max),Ut.expandByPoint(gt)):(Ut.expandByPoint(Xi.min),Ut.expandByPoint(Xi.max))}Ut.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),gt.add(Mi)),s=Math.max(s,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new z,l[L]=new z;const c=new z,h=new z,d=new z,f=new Ie,m=new Ie,g=new Ie,M=new z,p=new z;function u(L,b,S){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const x=1/(m.x*g.y-g.x*m.y);isFinite(x)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(x),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(x),o[L].add(M),o[b].add(M),o[S].add(M),l[L].add(p),l[b].add(p),l[S].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,b=w.length;L<b;++L){const S=w[L],x=S.start,F=S.count;for(let C=x,V=x+F;C<V;C+=3)u(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const T=new z,E=new z,k=new z,R=new z;function A(L){k.fromBufferAttribute(s,L),R.copy(k);const b=o[L];T.copy(b),T.sub(k.multiplyScalar(k.dot(b))).normalize(),E.crossVectors(R,b);const x=E.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,x)}for(let L=0,b=w.length;L<b;++L){const S=w[L],x=S.start,F=S.count;for(let C=x,V=x+F;C<V;C+=3)A(e.getX(C+0)),A(e.getX(C+1)),A(e.getX(C+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Jt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bo=new at,Hn=new Ll,ys=new cs,yo=new z,Ts=new z,ws=new z,As=new z,br=new z,Rs=new z,To=new z,Cs=new z;class Ct extends _t{constructor(e=new ri,t=new Il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(br.fromBufferAttribute(d,e),a?Rs.addScaledVector(br,h):Rs.addScaledVector(br.sub(t),h))}t.add(Rs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(ys.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ys,yo)===null||Hn.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(bo.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(bo),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const p=f[g],u=a[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=w,k=T;E<k;E+=3){const R=o.getX(E),A=o.getX(E+1),L=o.getX(E+2);s=Ps(this,u,e,i,c,h,d,R,A,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,u=M;p<u;p+=3){const w=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);s=Ps(this,a,e,i,c,h,d,w,T,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const p=f[g],u=a[p.materialIndex],w=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=w,k=T;E<k;E+=3){const R=E,A=E+1,L=E+2;s=Ps(this,u,e,i,c,h,d,R,A,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,u=M;p<u;p+=3){const w=p,T=p+1,E=p+2;s=Ps(this,a,e,i,c,h,d,w,T,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Dh(n,e,t,i,s,r,a,o){let l;if(e.side===Pt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===In,o),l===null)return null;Cs.copy(o),Cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:n}}function Ps(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ts),n.getVertexPosition(l,ws),n.getVertexPosition(c,As);const h=Dh(n,e,t,i,Ts,ws,As,To);if(h){const d=new z;jt.getBarycoord(To,Ts,ws,As,d),s&&(h.uv=jt.getInterpolatedAttribute(s,o,l,c,d,new Ie)),r&&(h.uv1=jt.getInterpolatedAttribute(r,o,l,c,d,new Ie)),a&&(h.normal=jt.getInterpolatedAttribute(a,o,l,c,d,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};jt.getNormal(Ts,ws,As,f.normal),h.face=f,h.barycoord=d}return h}class ki extends ri{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(h,3)),this.setAttribute("uv",new Jn(d,2));function g(M,p,u,w,T,E,k,R,A,L,b){const S=E/A,x=k/L,F=E/2,C=k/2,V=R/2,$=A+1,N=L+1;let H=0,O=0;const Q=new z;for(let q=0;q<N;q++){const ue=q*x-C;for(let ye=0;ye<$;ye++){const He=ye*S-F;Q[M]=He*w,Q[p]=ue*T,Q[u]=V,c.push(Q.x,Q.y,Q.z),Q[M]=0,Q[p]=0,Q[u]=R>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(ye/A),d.push(1-q/L),H+=1}}for(let q=0;q<L;q++)for(let ue=0;ue<A;ue++){const ye=f+ue+$*q,He=f+ue+$*(q+1),j=f+(ue+1)+$*(q+1),ee=f+(ue+1)+$*q;l.push(ye,He,ee),l.push(He,j,ee),O+=6}o.addGroup(m,O,b),m+=O,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=Fi(n[t]);for(const s in i)e[s]=i[s]}return e}function Uh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ol(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Ih={clone:Fi,merge:bt};var Nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends hs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new z,wo=new Ie,Ao=new Ie;class Ht extends kl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,wo,Ao),t.subVectors(Ao,wo)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,xi=1;class Oh extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(vi,xi,e,t);s.layers=this.layers,this.add(s);const r=new Ht(vi,xi,e,t);r.layers=this.layers,this.add(r);const a=new Ht(vi,xi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(vi,xi,e,t);o.layers=this.layers,this.add(o);const l=new Ht(vi,xi,e,t);l.layers=this.layers,this.add(l);const c=new Ht(vi,xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bl extends Tt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ki(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Fi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Ln});r.uniforms.tEquirect.value=t;const a=new Ct(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=nn),new Oh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const yr=new z,Bh=new z,zh=new Ue;class Cn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=yr.subVectors(i,t).cross(Bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zh.getNormalMatrix(e),s=this.coplanarPoint(yr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new cs,Ls=new z;class Fa{constructor(e=new Cn,t=new Cn,i=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],M=s[10],p=s[11],u=s[12],w=s[13],T=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,p-m,E-u).normalize(),i[1].setComponents(l+r,f+c,p+m,E+u).normalize(),i[2].setComponents(l+a,f+h,p+g,E+w).normalize(),i[3].setComponents(l-a,f-h,p-g,E-w).normalize(),i[4].setComponents(l-o,f-d,p-M,E-T).normalize(),t===Mn)i[5].setComponents(l+o,f+d,p+M,E+T).normalize();else if(t===Xs)i[5].setComponents(o,d,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ls.x=s.normal.x>0?e.max.x:e.min.x,Ls.y=s.normal.y>0?e.max.y:e.min.y,Ls.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zl(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vh(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],M=d[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,d[f]=M)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const M=d[m];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Qs extends ri{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,m=[],g=[],M=[],p=[];for(let u=0;u<h;u++){const w=u*f-a;for(let T=0;T<c;T++){const E=T*d-r;g.push(E,-w,0),M.push(0,0,1),p.push(T/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){const T=w+c*u,E=w+c*(u+1),k=w+1+c*(u+1),R=w+1+c*u;m.push(T,E,R),m.push(E,k,R)}this.setIndex(m),this.setAttribute("position",new Jn(g,3)),this.setAttribute("normal",new Jn(M,3)),this.setAttribute("uv",new Jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",vu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Iu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,of=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ff=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Hh,alphahash_pars_fragment:Gh,alphamap_fragment:Wh,alphamap_pars_fragment:$h,alphatest_fragment:Xh,alphatest_pars_fragment:qh,aomap_fragment:Yh,aomap_pars_fragment:jh,batching_pars_vertex:Kh,batching_vertex:Zh,begin_vertex:Jh,beginnormal_vertex:Qh,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ru,clipping_planes_vertex:au,color_fragment:ou,color_pars_fragment:lu,color_pars_vertex:cu,color_vertex:hu,common:uu,cube_uv_reflection_fragment:du,defaultnormal_vertex:fu,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:_u,colorspace_fragment:Mu,colorspace_pars_fragment:vu,envmap_fragment:xu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Eu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Iu,envmap_vertex:yu,fog_vertex:Tu,fog_pars_vertex:wu,fog_fragment:Au,fog_pars_fragment:Ru,gradientmap_pars_fragment:Cu,lightmap_pars_fragment:Pu,lights_lambert_fragment:Lu,lights_lambert_pars_fragment:Du,lights_pars_begin:Uu,lights_toon_fragment:Nu,lights_toon_pars_fragment:Fu,lights_phong_fragment:Ou,lights_phong_pars_fragment:ku,lights_physical_fragment:Bu,lights_physical_pars_fragment:zu,lights_fragment_begin:Vu,lights_fragment_maps:Hu,lights_fragment_end:Gu,logdepthbuf_fragment:Wu,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:Xu,logdepthbuf_vertex:qu,map_fragment:Yu,map_pars_fragment:ju,map_particle_fragment:Ku,map_particle_pars_fragment:Zu,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:Qu,morphinstance_vertex:ed,morphcolor_vertex:td,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:sd,normal_fragment_begin:rd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:ld,normal_vertex:cd,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:Md,dithering_fragment:vd,dithering_pars_fragment:xd,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:yd,shadowmap_vertex:Td,shadowmask_pars_fragment:wd,skinbase_vertex:Ad,skinning_pars_vertex:Rd,skinning_vertex:Cd,skinnormal_vertex:Pd,specularmap_fragment:Ld,specularmap_pars_fragment:Dd,tonemapping_fragment:Ud,tonemapping_pars_fragment:Id,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:kd,uv_vertex:Bd,worldpos_vertex:zd,background_vert:Vd,background_frag:Hd,backgroundCube_vert:Gd,backgroundCube_frag:Wd,cube_vert:$d,cube_frag:Xd,depth_vert:qd,depth_frag:Yd,distanceRGBA_vert:jd,distanceRGBA_frag:Kd,equirect_vert:Zd,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:ef,meshbasic_vert:tf,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:rf,meshmatcap_vert:af,meshmatcap_frag:of,meshnormal_vert:lf,meshnormal_frag:cf,meshphong_vert:hf,meshphong_frag:uf,meshphysical_vert:df,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:_f,shadow_vert:Mf,shadow_frag:vf,sprite_vert:xf,sprite_frag:Sf},ie={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},en={basic:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:bt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:bt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:bt([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:bt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:bt([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:bt([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:bt([ie.common,ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:bt([ie.lights,ie.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};en.physical={uniforms:bt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ds={r:0,b:0,g:0},Wn=new an,Ef=new at;function bf(n,e,t,i,s,r,a){const o=new qe(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function M(w){let T=!1;const E=g(w);E===null?u(o,l):E&&E.isColor&&(u(E,1),T=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,T){const E=g(T);E&&(E.isCubeTexture||E.mapping===Zs)?(h===void 0&&(h=new Ct(new ki(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Fi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wn.copy(T.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(Wn)),h.material.toneMapped=We.getTransfer(E.colorSpace)!==Qe,(d!==E||f!==E.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,m=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ct(new Qs(2,2),new Nn({name:"BackgroundMaterial",uniforms:Fi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=We.getTransfer(E.colorSpace)!==Qe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,T){w.getRGB(Ds,Ol(n)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(w,T=1){o.set(w),l=T,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:M,addToRenderList:p}}function yf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(S,x,F,C,V){let $=!1;const N=d(C,F,x);r!==N&&(r=N,c(r.object)),$=m(S,C,F,V),$&&g(S,C,F,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(S,x,F,C),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,x,F){const C=F.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let $=V[x.id];$===void 0&&($={},V[x.id]=$);let N=$[C];return N===void 0&&(N=f(l()),$[C]=N),N}function f(S){const x=[],F=[],C=[];for(let V=0;V<t;V++)x[V]=0,F[V]=0,C[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:F,attributeDivisors:C,object:S,attributes:{},index:null}}function m(S,x,F,C){const V=r.attributes,$=x.attributes;let N=0;const H=F.getAttributes();for(const O in H)if(H[O].location>=0){const q=V[O];let ue=$[O];if(ue===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),q===void 0||q.attribute!==ue||ue&&q.data!==ue.data)return!0;N++}return r.attributesNum!==N||r.index!==C}function g(S,x,F,C){const V={},$=x.attributes;let N=0;const H=F.getAttributes();for(const O in H)if(H[O].location>=0){let q=$[O];q===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const ue={};ue.attribute=q,q&&q.data&&(ue.data=q.data),V[O]=ue,N++}r.attributes=V,r.attributesNum=N,r.index=C}function M(){const S=r.newAttributes;for(let x=0,F=S.length;x<F;x++)S[x]=0}function p(S){u(S,0)}function u(S,x){const F=r.newAttributes,C=r.enabledAttributes,V=r.attributeDivisors;F[S]=1,C[S]===0&&(n.enableVertexAttribArray(S),C[S]=1),V[S]!==x&&(n.vertexAttribDivisor(S,x),V[S]=x)}function w(){const S=r.newAttributes,x=r.enabledAttributes;for(let F=0,C=x.length;F<C;F++)x[F]!==S[F]&&(n.disableVertexAttribArray(F),x[F]=0)}function T(S,x,F,C,V,$,N){N===!0?n.vertexAttribIPointer(S,x,F,V,$):n.vertexAttribPointer(S,x,F,C,V,$)}function E(S,x,F,C){M();const V=C.attributes,$=F.getAttributes(),N=x.defaultAttributeValues;for(const H in $){const O=$[H];if(O.location>=0){let Q=V[H];if(Q===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const q=Q.normalized,ue=Q.itemSize,ye=e.get(Q);if(ye===void 0)continue;const He=ye.buffer,j=ye.type,ee=ye.bytesPerElement,fe=j===n.INT||j===n.UNSIGNED_INT||Q.gpuType===Ca;if(Q.isInterleavedBufferAttribute){const se=Q.data,Te=se.stride,Ae=Q.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<O.locationSize;Ne++)u(O.location+Ne,se.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<O.locationSize;Ne++)p(O.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ne=0;Ne<O.locationSize;Ne++)T(O.location+Ne,ue/O.locationSize,j,q,Te*ee,(Ae+ue/O.locationSize*Ne)*ee,fe)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<O.locationSize;se++)u(O.location+se,Q.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<O.locationSize;se++)p(O.location+se);n.bindBuffer(n.ARRAY_BUFFER,He);for(let se=0;se<O.locationSize;se++)T(O.location+se,ue/O.locationSize,j,q,ue*ee,ue/O.locationSize*se*ee,fe)}}else if(N!==void 0){const q=N[H];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(O.location,q);break;case 3:n.vertexAttrib3fv(O.location,q);break;case 4:n.vertexAttrib4fv(O.location,q);break;default:n.vertexAttrib1fv(O.location,q)}}}}w()}function k(){L();for(const S in i){const x=i[S];for(const F in x){const C=x[F];for(const V in C)h(C[V].object),delete C[V];delete x[F]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const x=i[S.id];for(const F in x){const C=x[F];for(const V in C)h(C[V].object),delete C[V];delete x[F]}delete i[S.id]}function A(S){for(const x in i){const F=i[x];if(F[S.id]===void 0)continue;const C=F[S.id];for(const V in C)h(C[V].object),delete C[V];delete F[S.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:w}}function Tf(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,i,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let M=0;M<d;M++)g+=h[M]*f[M];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Zt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:k,maxSamples:R}}function Af(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Cn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const w=r?0:i,T=w*4;let E=u.clippingState||null;l.value=E,E=h(g,f,T,m);for(let k=0;k!==T;++k)E[k]=t[k];u.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,g){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const u=m+M*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,E=m;T!==M;++T,E+=4)a.copy(d[T]).applyMatrix4(w,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Rf(n){let e=new WeakMap;function t(a,o){return o===$r?a.mapping=Di:o===Xr&&(a.mapping=Ui),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$r||o===Xr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Vl extends kl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,Ro=[.125,.215,.35,.446,.526,.582],Yn=20,Tr=new Vl,Co=new qe;let wr=null,Ar=0,Rr=0,Cr=!1;const Xn=(1+Math.sqrt(5))/2,Si=1/Xn,Po=[new z(-Xn,Si,0),new z(Xn,Si,0),new z(-Si,0,Xn),new z(Si,0,Xn),new z(0,Xn,-Si),new z(0,Xn,Si),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){wr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wr,Ar,Rr),this._renderer.xr.enabled=Cr,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:os,format:Zt,colorSpace:Oi,depthBuffer:!1},s=Do(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cf(r)),this._blurMaterial=Pf(r,e,t)}return s}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,i,s){const o=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Co),h.toneMapping=Dn,h.autoClear=!1;const m=new Il({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Ct(new ki,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(Co),M=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const T=this._cubeSize;Us(s,w*T,u>2?T:0,T,T),h.setRenderTarget(s),M&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Di||e.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Po[(s-r-1)%Po.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ct(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),M=r/g,p=isFinite(r)?1+Math.floor(h*M):Yn;p>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);const u=[];let w=0;for(let A=0;A<Yn;++A){const L=A/M,b=Math.exp(-L*L/2);u.push(b),A===0?w+=b:A<p&&(w+=2*b)}for(let A=0;A<u.length;A++)u[A]=u[A]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const E=this._sizeLods[s],k=3*E*(s>T-yi?s-T+yi:0),R=4*(this._cubeSize-E);Us(t,k,R,3*E,2*E),l.setRenderTarget(t),l.render(d,Tr)}}function Cf(n){const e=[],t=[],i=[];let s=n;const r=n-yi+1+Ro.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-yi?l=Ro[a-n+yi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,M=3,p=2,u=1,w=new Float32Array(M*g*m),T=new Float32Array(p*g*m),E=new Float32Array(u*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,L=R>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];w.set(b,M*g*R),T.set(f,p*g*R);const S=[R,R,R,R,R,R];E.set(S,u*g*R)}const k=new ri;k.setAttribute("position",new Jt(w,M)),k.setAttribute("uv",new Jt(T,p)),k.setAttribute("faceIndex",new Jt(E,u)),e.push(k),s>yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Do(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Pf(n,e,t){const i=new Float32Array(Yn),s=new z(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Uo(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Io(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$r||l===Xr,h=l===Di||l===Ui;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Lo(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Lo(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Df(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ki("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Uf(n,e,t,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const M=f.morphAttributes[g];for(let p=0,u=M.length;p<u;p++)e.remove(M[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const M=m[g];for(let p=0,u=M.length;p<u;p++)e.update(M[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let M=0;if(m!==null){const w=m.array;M=m.version;for(let T=0,E=w.length;T<E;T+=3){const k=w[T+0],R=w[T+1],A=w[T+2];f.push(k,R,R,A,A,k)}}else if(g!==void 0){const w=g.array;M=g.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const k=T+0,R=T+1,A=T+2;f.push(k,R,R,A,A,k)}}else return;const p=new(Rl(f)?Fl:Nl)(f,1);p.version=M;const u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function If(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*a),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*a,g),t.update(m,i,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];t.update(p,i,1)}function d(f,m,g,M){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,M,0,g);let u=0;for(let w=0;w<g;w++)u+=m[w]*M[w];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Nf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ff(n,e,t){const i=new WeakMap,s=new ht;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),M===!0&&(E=2),p===!0&&(E=3);let k=o.attributes.position.count*E,R=1;k>e.maxTextureSize&&(R=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const A=new Float32Array(k*R*4*d),L=new Pl(A,k,R,d);L.type=sn,L.needsUpdate=!0;const b=E*4;for(let x=0;x<d;x++){const F=u[x],C=w[x],V=T[x],$=k*R*4*x;for(let N=0;N<F.count;N++){const H=N*b;g===!0&&(s.fromBufferAttribute(F,N),A[$+H+0]=s.x,A[$+H+1]=s.y,A[$+H+2]=s.z,A[$+H+3]=0),M===!0&&(s.fromBufferAttribute(C,N),A[$+H+4]=s.x,A[$+H+5]=s.y,A[$+H+6]=s.z,A[$+H+7]=0),p===!0&&(s.fromBufferAttribute(V,N),A[$+H+8]=s.x,A[$+H+9]=s.y,A[$+H+10]=s.z,A[$+H+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Ie(k,R)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Of(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Hl extends Tt{constructor(e,t,i,s,r,a,o,l,c,h=Ri){if(h!==Ri&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ri&&(i=ei),i===void 0&&h===Ni&&(i=Ii),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gl=new Tt,No=new Hl(1,1),Wl=new Pl,$l=new Eh,Xl=new Bl,Fo=[],Oo=[],ko=new Float32Array(16),Bo=new Float32Array(9),zo=new Float32Array(4);function Bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Fo[s];if(r===void 0&&(r=new Float32Array(s),Fo[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function er(n,e){let t=Oo[e];t===void 0&&(t=new Int32Array(e),Oo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function Hf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;zo.set(i),n.uniformMatrix2fv(this.addr,!1,zo),mt(t,i)}}function Gf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Bo.set(i),n.uniformMatrix3fv(this.addr,!1,Bo),mt(t,i)}}function Wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;ko.set(i),n.uniformMatrix4fv(this.addr,!1,ko),mt(t,i)}}function $f(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function Yf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function jf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function Zf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Qf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(No.compareFunction=Al,r=No):r=Gl,t.setTexture2D(e||r,s)}function ep(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$l,s)}function tp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xl,s)}function np(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wl,s)}function ip(n){switch(n){case 5126:return kf;case 35664:return Bf;case 35665:return zf;case 35666:return Vf;case 35674:return Hf;case 35675:return Gf;case 35676:return Wf;case 5124:case 35670:return $f;case 35667:case 35671:return Xf;case 35668:case 35672:return qf;case 35669:case 35673:return Yf;case 5125:return jf;case 36294:return Kf;case 36295:return Zf;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return np}}function sp(n,e){n.uniform1fv(this.addr,e)}function rp(n,e){const t=Bi(e,this.size,2);n.uniform2fv(this.addr,t)}function ap(n,e){const t=Bi(e,this.size,3);n.uniform3fv(this.addr,t)}function op(n,e){const t=Bi(e,this.size,4);n.uniform4fv(this.addr,t)}function lp(n,e){const t=Bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cp(n,e){const t=Bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hp(n,e){const t=Bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function up(n,e){n.uniform1iv(this.addr,e)}function dp(n,e){n.uniform2iv(this.addr,e)}function fp(n,e){n.uniform3iv(this.addr,e)}function pp(n,e){n.uniform4iv(this.addr,e)}function mp(n,e){n.uniform1uiv(this.addr,e)}function gp(n,e){n.uniform2uiv(this.addr,e)}function _p(n,e){n.uniform3uiv(this.addr,e)}function Mp(n,e){n.uniform4uiv(this.addr,e)}function vp(n,e,t){const i=this.cache,s=e.length,r=er(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gl,r[a])}function xp(n,e,t){const i=this.cache,s=e.length,r=er(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$l,r[a])}function Sp(n,e,t){const i=this.cache,s=e.length,r=er(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xl,r[a])}function Ep(n,e,t){const i=this.cache,s=e.length,r=er(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wl,r[a])}function bp(n){switch(n){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}class yp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ip(t.type)}}class Tp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bp(t.type)}}class wp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Pr=/(\w+)(\])?(\[|\.)?/g;function Vo(n,e){n.seq.push(e),n.map[e.id]=e}function Ap(n,e,t){const i=n.name,s=i.length;for(Pr.lastIndex=0;;){const r=Pr.exec(i),a=Pr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vo(t,c===void 0?new yp(o,n,e):new Tp(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new wp(o),Vo(t,d)),t=d}}}class Ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ap(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ho(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rp=37297;let Cp=0;function Pp(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Go=new Ue;function Lp(n){We._getMatrix(Go,We.workingColorSpace,n);const e=`mat3( ${Go.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case Js:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Pp(n.getShaderSource(e),a)}else return s}function Dp(n,e){const t=Lp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Up(n,e){let t;switch(e){case Yc:t="Linear";break;case jc:t="Reinhard";break;case Kc:t="Cineon";break;case Zc:t="ACESFilmic";break;case Qc:t="AgX";break;case eh:t="Neutral";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new z;function Ip(){We.getLuminanceCoefficients(Is);const n=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Np(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function Fp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Op(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zi(n){return n!==""}function $o(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(n){return n.replace(kp,zp)}const Bp=new Map;function zp(n,e){let t=Oe[e];if(t===void 0){const i=Bp.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ea(t)}const Vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(n){return n.replace(Vp,Hp)}function Hp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Di:case Ui:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $p(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Xp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Xc:e="ENVMAP_BLENDING_MIX";break;case qc:e="ENVMAP_BLENDING_ADD";break}return e}function qp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Yp(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gp(t),c=Wp(t),h=$p(t),d=Xp(t),f=qp(t),m=Np(t),g=Fp(r),M=s.createProgram();let p,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),u.length>0&&(u+=`
`)):(p=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),u=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Dp("linearToOutputTexel",t.outputColorSpace),Ip(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Ea(a),a=$o(a,t),a=Xo(a,t),o=Ea(o),o=$o(o,t),o=Xo(o,t),a=qo(a),o=qo(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=w+p+a,E=w+u+o,k=Ho(s,s.VERTEX_SHADER,T),R=Ho(s,s.FRAGMENT_SHADER,E);s.attachShader(M,k),s.attachShader(M,R),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(x){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(M).trim(),C=s.getShaderInfoLog(k).trim(),V=s.getShaderInfoLog(R).trim();let $=!0,N=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,k,R);else{const H=Wo(s,k,"vertex"),O=Wo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+F+`
`+H+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(C===""||V==="")&&(N=!1);N&&(x.diagnostics={runnable:$,programLog:F,vertexShader:{log:C,prefix:p},fragmentShader:{log:V,prefix:u}})}s.deleteShader(k),s.deleteShader(R),L=new Ws(s,M),b=Op(s,M)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,Rp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=k,this.fragmentShader=R,this}let jp=0;class Kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Zp(e),t.set(e,i)),i}}class Zp{constructor(e){this.id=jp++,this.code=e,this.usedTimes=0}}function Jp(n,e,t,i,s,r,a){const o=new Dl,l=new Kp,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,x,F,C){const V=F.fog,$=C.geometry,N=b.isMeshStandardMaterial?F.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||N),O=H&&H.mapping===Zs?H.image.height:null,Q=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=q!==void 0?q.length:0;let ye=0;$.morphAttributes.position!==void 0&&(ye=1),$.morphAttributes.normal!==void 0&&(ye=2),$.morphAttributes.color!==void 0&&(ye=3);let He,j,ee,fe;if(Q){const Je=en[Q];He=Je.vertexShader,j=Je.fragmentShader}else He=b.vertexShader,j=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),fe=l.getFragmentShaderID(b);const se=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Ae=C.isInstancedMesh===!0,Ne=C.isBatchedMesh===!0,tt=!!b.map,ze=!!b.matcap,ot=!!H,U=!!b.aoMap,Et=!!b.lightMap,Be=!!b.bumpMap,ge=!!b.normalMap,Me=!!b.displacementMap,Pe=!!b.emissiveMap,de=!!b.metalnessMap,y=!!b.roughnessMap,_=b.anisotropy>0,B=b.clearcoat>0,Y=b.dispersion>0,Z=b.iridescence>0,K=b.sheen>0,ve=b.transmission>0,re=_&&!!b.anisotropyMap,oe=B&&!!b.clearcoatMap,Ve=B&&!!b.clearcoatNormalMap,te=B&&!!b.clearcoatRoughnessMap,pe=Z&&!!b.iridescenceMap,we=Z&&!!b.iridescenceThicknessMap,Re=K&&!!b.sheenColorMap,me=K&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Fe=!!b.specularColorMap,nt=!!b.specularIntensityMap,P=ve&&!!b.transmissionMap,ae=ve&&!!b.thicknessMap,X=!!b.gradientMap,J=!!b.alphaMap,he=b.alphaTest>0,le=!!b.alphaHash,Le=!!b.extensions;let lt=Dn;b.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(lt=n.toneMapping);const Mt={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:j,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&C._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&C.instanceColor!==null,instancingMorph:Ae&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Oi,alphaToCoverage:!!b.alphaToCoverage,map:tt,matcap:ze,envMap:ot,envMapMode:ot&&H.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:Et,bumpMap:Be,normalMap:ge,displacementMap:f&&Me,emissiveMap:Pe,normalMapObjectSpace:ge&&b.normalMapType===sh,normalMapTangentSpace:ge&&b.normalMapType===wl,metalnessMap:de,roughnessMap:y,anisotropy:_,anisotropyMap:re,clearcoat:B,clearcoatMap:oe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:te,dispersion:Y,iridescence:Z,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:K,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:nt,transmission:ve,transmissionMap:P,thicknessMap:ae,gradientMap:X,opaque:b.transparent===!1&&b.blending===Ai&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:le,combine:b.combine,mapUv:tt&&M(b.map.channel),aoMapUv:U&&M(b.aoMap.channel),lightMapUv:Et&&M(b.lightMap.channel),bumpMapUv:Be&&M(b.bumpMap.channel),normalMapUv:ge&&M(b.normalMap.channel),displacementMapUv:Me&&M(b.displacementMap.channel),emissiveMapUv:Pe&&M(b.emissiveMap.channel),metalnessMapUv:de&&M(b.metalnessMap.channel),roughnessMapUv:y&&M(b.roughnessMap.channel),anisotropyMapUv:re&&M(b.anisotropyMap.channel),clearcoatMapUv:oe&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:we&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&M(b.sheenRoughnessMap.channel),specularMapUv:Ge&&M(b.specularMap.channel),specularColorMapUv:Fe&&M(b.specularColorMap.channel),specularIntensityMapUv:nt&&M(b.specularIntensityMap.channel),transmissionMapUv:P&&M(b.transmissionMap.channel),thicknessMapUv:ae&&M(b.thicknessMap.channel),alphaMapUv:J&&M(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ge||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!$.attributes.uv&&(tt||J),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:C.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&x.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:tt&&b.map.isVideoTexture===!0&&We.getTransfer(b.map.colorSpace)===Qe,decodeVideoTextureEmissive:Pe&&b.emissiveMap.isVideoTexture===!0&&We.getTransfer(b.emissiveMap.colorSpace)===Qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gn,flipSided:b.side===Pt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Le&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&b.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function u(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const x in b.defines)S.push(x),S.push(b.defines[x]);return b.isRawShaderMaterial===!1&&(w(S,b),T(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function T(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function E(b){const S=g[b.type];let x;if(S){const F=en[S];x=Ih.clone(F.uniforms)}else x=b.uniforms;return x}function k(b,S){let x;for(let F=0,C=h.length;F<C;F++){const V=h[F];if(V.cacheKey===S){x=V,++x.usedTimes;break}}return x===void 0&&(x=new Yp(n,S,b,r),h.push(x)),x}function R(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:k,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:L}}function Qp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function em(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ko(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,m,g,M,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:M,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=M,u.group=p),e++,u}function o(d,f,m,g,M,p){const u=a(d,f,m,g,M,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,f,m,g,M,p){const u=a(d,f,m,g,M,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||em),i.length>1&&i.sort(f||jo),s.length>1&&s.sort(f||jo)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function tm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ko,n.set(i,[a])):s>=r.length?(a=new Ko,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function nm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new qe};break;case"SpotLight":t={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function im(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sm=0;function rm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function am(n){const e=new nm,t=im(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new at,a=new at;function o(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,M=0,p=0,u=0,w=0,T=0,E=0,k=0,R=0,A=0;c.sort(rm);for(let b=0,S=c.length;b<S;b++){const x=c[b],F=x.color,C=x.intensity,V=x.distance,$=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)h+=F.r*C,d+=F.g*C,f+=F.b*C;else if(x.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(x.sh.coefficients[N],C);A++}else if(x.isDirectionalLight){const N=e.get(x);if(N.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const H=x.shadow,O=t.get(x);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=x.shadow.matrix,w++}i.directional[m]=N,m++}else if(x.isSpotLight){const N=e.get(x);N.position.setFromMatrixPosition(x.matrixWorld),N.color.copy(F).multiplyScalar(C),N.distance=V,N.coneCos=Math.cos(x.angle),N.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),N.decay=x.decay,i.spot[M]=N;const H=x.shadow;if(x.map&&(i.spotLightMap[k]=x.map,k++,H.updateMatrices(x),x.castShadow&&R++),i.spotLightMatrix[M]=H.matrix,x.castShadow){const O=t.get(x);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,i.spotShadow[M]=O,i.spotShadowMap[M]=$,E++}M++}else if(x.isRectAreaLight){const N=e.get(x);N.color.copy(F).multiplyScalar(C),N.halfWidth.set(x.width*.5,0,0),N.halfHeight.set(0,x.height*.5,0),i.rectArea[p]=N,p++}else if(x.isPointLight){const N=e.get(x);if(N.color.copy(x.color).multiplyScalar(x.intensity),N.distance=x.distance,N.decay=x.decay,x.castShadow){const H=x.shadow,O=t.get(x);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=x.shadow.matrix,T++}i.point[g]=N,g++}else if(x.isHemisphereLight){const N=e.get(x);N.skyColor.copy(x.color).multiplyScalar(C),N.groundColor.copy(x.groundColor).multiplyScalar(C),i.hemi[u]=N,u++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==p||L.hemiLength!==u||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==E||L.numSpotMaps!==k||L.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+k-R,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,L.directionalLength=m,L.pointLength=g,L.spotLength=M,L.rectAreaLength=p,L.hemiLength=u,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=E,L.numSpotMaps=k,L.numLightProbes=A,i.version=sm++)}function l(c,h){let d=0,f=0,m=0,g=0,M=0;const p=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const T=c[u];if(T.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(T.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:i}}function Zo(n){const e=new am(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function om(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Zo(n),e.set(s,[o])):r>=a.length?(o=new Zo(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class lm extends hs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cm extends hs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dm(n,e,t){let i=new Fa;const s=new Ie,r=new Ie,a=new ht,o=new lm({depthPacking:ih}),l=new cm,c={},h=t.maxTextureSize,d={[In]:Pt,[Pt]:In,[gn]:gn},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:hm,fragmentShader:um}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ct(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let u=this.type;this.render=function(R,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ln),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const C=u!==mn&&this.type===mn,V=u===mn&&this.type!==mn;for(let $=0,N=R.length;$<N;$++){const H=R[$],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Q=O.getFrameExtents();if(s.multiply(Q),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,O.mapSize.y=r.y)),O.map===null||C===!0||V===!0){const ue=this.type!==mn?{minFilter:kt,magFilter:kt}:{};O.map!==null&&O.map.dispose(),O.map=new ti(s.x,s.y,ue),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const q=O.getViewportCount();for(let ue=0;ue<q;ue++){const ye=O.getViewport(ue);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),F.viewport(a),O.updateMatrices(H,ue),i=O.getFrustum(),E(A,L,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===mn&&w(O,L),O.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(b,S,x)};function w(R,A){const L=e.update(M);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,L,m,M,null)}function T(R,A,L,b){let S=null;const x=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(x!==void 0)S=x;else if(S=L.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=S.uuid,C=A.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let $=V[C];$===void 0&&($=S.clone(),V[C]=$,A.addEventListener("dispose",k)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,b===mn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=L}return S}function E(R,A,L,b,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===mn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const C=e.update(R),V=R.material;if(Array.isArray(V)){const $=C.groups;for(let N=0,H=$.length;N<H;N++){const O=$[N],Q=V[O.materialIndex];if(Q&&Q.visible){const q=T(R,Q,b,S);R.onBeforeShadow(n,R,A,L,C,q,O),n.renderBufferDirect(L,null,C,q,R,O),R.onAfterShadow(n,R,A,L,C,q,O)}}}else if(V.visible){const $=T(R,V,b,S);R.onBeforeShadow(n,R,A,L,C,$,null),n.renderBufferDirect(L,null,C,$,R,null),R.onAfterShadow(n,R,A,L,C,$,null)}}const F=R.children;for(let C=0,V=F.length;C<V;C++)E(F[C],A,L,b,S)}function k(R){R.target.removeEventListener("dispose",k);for(const L in c){const b=c[L],S=R.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const fm={[kr]:Br,[zr]:Gr,[Vr]:Wr,[Li]:Hr,[Br]:kr,[Gr]:zr,[Wr]:Vr,[Hr]:Li};function pm(n,e){function t(){let P=!1;const ae=new ht;let X=null;const J=new ht(0,0,0,0);return{setMask:function(he){X!==he&&!P&&(n.colorMask(he,he,he,he),X=he)},setLocked:function(he){P=he},setClear:function(he,le,Le,lt,Mt){Mt===!0&&(he*=lt,le*=lt,Le*=lt),ae.set(he,le,Le,lt),J.equals(ae)===!1&&(n.clearColor(he,le,Le,lt),J.copy(ae))},reset:function(){P=!1,X=null,J.set(-1,0,0,0)}}}function i(){let P=!1,ae=!1,X=null,J=null,he=null;return{setReversed:function(le){if(ae!==le){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const lt=he;he=null,this.setClear(lt)}ae=le},getReversed:function(){return ae},setTest:function(le){le?se(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(le){X!==le&&!P&&(n.depthMask(le),X=le)},setFunc:function(le){if(ae&&(le=fm[le]),J!==le){switch(le){case kr:n.depthFunc(n.NEVER);break;case Br:n.depthFunc(n.ALWAYS);break;case zr:n.depthFunc(n.LESS);break;case Li:n.depthFunc(n.LEQUAL);break;case Vr:n.depthFunc(n.EQUAL);break;case Hr:n.depthFunc(n.GEQUAL);break;case Gr:n.depthFunc(n.GREATER);break;case Wr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=le}},setLocked:function(le){P=le},setClear:function(le){he!==le&&(ae&&(le=1-le),n.clearDepth(le),he=le)},reset:function(){P=!1,X=null,J=null,he=null,ae=!1}}}function s(){let P=!1,ae=null,X=null,J=null,he=null,le=null,Le=null,lt=null,Mt=null;return{setTest:function(Je){P||(Je?se(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!P&&(n.stencilMask(Je),ae=Je)},setFunc:function(Je,Gt,ln){(X!==Je||J!==Gt||he!==ln)&&(n.stencilFunc(Je,Gt,ln),X=Je,J=Gt,he=ln)},setOp:function(Je,Gt,ln){(le!==Je||Le!==Gt||lt!==ln)&&(n.stencilOp(Je,Gt,ln),le=Je,Le=Gt,lt=ln)},setLocked:function(Je){P=Je},setClear:function(Je){Mt!==Je&&(n.clearStencil(Je),Mt=Je)},reset:function(){P=!1,ae=null,X=null,J=null,he=null,le=null,Le=null,lt=null,Mt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,M=!1,p=null,u=null,w=null,T=null,E=null,k=null,R=null,A=new qe(0,0,0),L=0,b=!1,S=null,x=null,F=null,C=null,V=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=H>=2);let Q=null,q={};const ue=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),He=new ht().fromArray(ue),j=new ht().fromArray(ye);function ee(P,ae,X,J){const he=new Uint8Array(4),le=n.createTexture();n.bindTexture(P,le),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<X;Le++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ae+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return le}const fe={};fe[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(Li),Be(!1),ge(eo),se(n.CULL_FACE),U(Ln);function se(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Te(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Ae(P,ae){return d[P]!==ae?(n.bindFramebuffer(P,ae),d[P]=ae,P===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),P===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ne(P,ae){let X=m,J=!1;if(P){X=f.get(ae),X===void 0&&(X=[],f.set(ae,X));const he=P.textures;if(X.length!==he.length||X[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Le=he.length;le<Le;le++)X[le]=n.COLOR_ATTACHMENT0+le;X.length=he.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function tt(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const ze={[qn]:n.FUNC_ADD,[Cc]:n.FUNC_SUBTRACT,[Pc]:n.FUNC_REVERSE_SUBTRACT};ze[Lc]=n.MIN,ze[Dc]=n.MAX;const ot={[Uc]:n.ZERO,[Ic]:n.ONE,[Nc]:n.SRC_COLOR,[Fr]:n.SRC_ALPHA,[Vc]:n.SRC_ALPHA_SATURATE,[Bc]:n.DST_COLOR,[Oc]:n.DST_ALPHA,[Fc]:n.ONE_MINUS_SRC_COLOR,[Or]:n.ONE_MINUS_SRC_ALPHA,[zc]:n.ONE_MINUS_DST_COLOR,[kc]:n.ONE_MINUS_DST_ALPHA,[Hc]:n.CONSTANT_COLOR,[Gc]:n.ONE_MINUS_CONSTANT_COLOR,[Wc]:n.CONSTANT_ALPHA,[$c]:n.ONE_MINUS_CONSTANT_ALPHA};function U(P,ae,X,J,he,le,Le,lt,Mt,Je){if(P===Ln){M===!0&&(Te(n.BLEND),M=!1);return}if(M===!1&&(se(n.BLEND),M=!0),P!==Rc){if(P!==p||Je!==b){if((u!==qn||E!==qn)&&(n.blendEquation(n.FUNC_ADD),u=qn,E=qn),Je)switch(P){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case to:n.blendFunc(n.ONE,n.ONE);break;case no:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case io:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case to:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case no:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case io:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,T=null,k=null,R=null,A.set(0,0,0),L=0,p=P,b=Je}return}he=he||ae,le=le||X,Le=Le||J,(ae!==u||he!==E)&&(n.blendEquationSeparate(ze[ae],ze[he]),u=ae,E=he),(X!==w||J!==T||le!==k||Le!==R)&&(n.blendFuncSeparate(ot[X],ot[J],ot[le],ot[Le]),w=X,T=J,k=le,R=Le),(lt.equals(A)===!1||Mt!==L)&&(n.blendColor(lt.r,lt.g,lt.b,Mt),A.copy(lt),L=Mt),p=P,b=!1}function Et(P,ae){P.side===gn?Te(n.CULL_FACE):se(n.CULL_FACE);let X=P.side===Pt;ae&&(X=!X),Be(X),P.blending===Ai&&P.transparent===!1?U(Ln):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const J=P.stencilWrite;o.setTest(J),J&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){S!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),S=P)}function ge(P){P!==Tc?(se(n.CULL_FACE),P!==x&&(P===eo?n.cullFace(n.BACK):P===wc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),x=P}function Me(P){P!==F&&(N&&n.lineWidth(P),F=P)}function Pe(P,ae,X){P?(se(n.POLYGON_OFFSET_FILL),(C!==ae||V!==X)&&(n.polygonOffset(ae,X),C=ae,V=X)):Te(n.POLYGON_OFFSET_FILL)}function de(P){P?se(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function y(P){P===void 0&&(P=n.TEXTURE0+$-1),Q!==P&&(n.activeTexture(P),Q=P)}function _(P,ae,X){X===void 0&&(Q===null?X=n.TEXTURE0+$-1:X=Q);let J=q[X];J===void 0&&(J={type:void 0,texture:void 0},q[X]=J),(J.type!==P||J.texture!==ae)&&(Q!==X&&(n.activeTexture(X),Q=X),n.bindTexture(P,ae||fe[P]),J.type=P,J.texture=ae)}function B(){const P=q[Q];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){He.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),He.copy(P))}function me(P){j.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function Ge(P,ae){let X=c.get(ae);X===void 0&&(X=new WeakMap,c.set(ae,X));let J=X.get(P);J===void 0&&(J=n.getUniformBlockIndex(ae,P.name),X.set(P,J))}function Fe(P,ae){const J=c.get(ae).get(P);l.get(ae)!==J&&(n.uniformBlockBinding(ae,J,P.__bindingPointIndex),l.set(ae,J))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,q={},d={},f=new WeakMap,m=[],g=null,M=!1,p=null,u=null,w=null,T=null,E=null,k=null,R=null,A=new qe(0,0,0),L=0,b=!1,S=null,x=null,F=null,C=null,V=null,He.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Te,bindFramebuffer:Ae,drawBuffers:Ne,useProgram:tt,setBlending:U,setMaterial:Et,setFlipSided:Be,setCullFace:ge,setLineWidth:Me,setPolygonOffset:Pe,setScissorTest:de,activeTexture:y,bindTexture:_,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:pe,texImage3D:we,updateUBOMapping:Ge,uniformBlockBinding:Fe,texStorage2D:Ve,texStorage3D:te,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:oe,scissor:Re,viewport:me,reset:nt}}function Jo(n,e,t,i){const s=mm(i);switch(t){case xl:return n*e;case El:return n*e;case bl:return n*e*2;case Da:return n*e/s.components*s.byteLength;case Ua:return n*e/s.components*s.byteLength;case yl:return n*e*2/s.components*s.byteLength;case Ia:return n*e*2/s.components*s.byteLength;case Sl:return n*e*3/s.components*s.byteLength;case Zt:return n*e*4/s.components*s.byteLength;case Na:return n*e*4/s.components*s.byteLength;case ks:case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kr:case Jr:return Math.max(n,16)*Math.max(e,8)/4;case jr:case Zr:return Math.max(n,8)*Math.max(e,8)/2;case Qr:case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case la:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ca:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ha:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hs:case ga:case _a:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tl:case Ma:return Math.ceil(n/4)*Math.ceil(e/4)*8;case va:case xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(n){switch(n){case xn:case _l:return{byteLength:1,components:1};case ts:case Ml:case os:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case ei:case Ca:case sn:return{byteLength:4,components:1};case vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gm(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):qs("canvas")}function M(y,_,B){let Y=1;const Z=de(y);if((Z.width>B||Z.height>B)&&(Y=B/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const K=Math.floor(Y*Z.width),ve=Math.floor(Y*Z.height);d===void 0&&(d=g(K,ve));const re=_?g(K,ve):d;return re.width=K,re.height=ve,re.getContext("2d").drawImage(y,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+ve+")."),re}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function p(y){return y.generateMipmaps}function u(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,_,B,Y,Z=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=_;if(_===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),_===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),_===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),_===n.RGBA){const ve=Z?Js:We.getTransfer(Y);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=ve===Qe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(y,_){let B;return y?_===null||_===ei||_===Ii?B=n.DEPTH24_STENCIL8:_===sn?B=n.DEPTH32F_STENCIL8:_===ts&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===Ii?B=n.DEPTH_COMPONENT24:_===sn?B=n.DEPTH_COMPONENT32F:_===ts&&(B=n.DEPTH_COMPONENT16),B}function k(y,_){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==kt&&y.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function R(y){const _=y.target;_.removeEventListener("dispose",R),L(_),_.isVideoTexture&&h.delete(_)}function A(y){const _=y.target;_.removeEventListener("dispose",A),S(_)}function L(y){const _=i.get(y);if(_.__webglInit===void 0)return;const B=y.source,Y=f.get(B);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(y),Object.keys(Y).length===0&&f.delete(B)}i.remove(y)}function b(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const B=y.source,Y=f.get(B);delete Y[_.__cacheKey],a.memory.textures--}function S(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=y.textures;for(let Y=0,Z=B.length;Y<Z;Y++){const K=i.get(B[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(B[Y])}i.remove(y)}let x=0;function F(){x=0}function C(){const y=x;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),x+=1,y}function V(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function $(y,_){const B=i.get(y);if(y.isVideoTexture&&Me(y),y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){const Y=y.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,y,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function N(y,_){const B=i.get(y);if(y.version>0&&B.__version!==y.version){j(B,y,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function H(y,_){const B=i.get(y);if(y.version>0&&B.__version!==y.version){j(B,y,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function O(y,_){const B=i.get(y);if(y.version>0&&B.__version!==y.version){ee(B,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}const Q={[qr]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Yr]:n.MIRRORED_REPEAT},q={[kt]:n.NEAREST,[th]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[ir]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},ue={[rh]:n.NEVER,[uh]:n.ALWAYS,[ah]:n.LESS,[Al]:n.LEQUAL,[oh]:n.EQUAL,[hh]:n.GEQUAL,[lh]:n.GREATER,[ch]:n.NOTEQUAL};function ye(y,_){if(_.type===sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===ir||_.magFilter===ps||_.magFilter===Kn||_.minFilter===nn||_.minFilter===ir||_.minFilter===ps||_.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,Q[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,Q[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,Q[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,q[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,q[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kt||_.minFilter!==ps&&_.minFilter!==Kn||_.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function He(y,_){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",R));const Y=_.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const K=V(_);if(K!==y.__cacheKey){Z[K]===void 0&&(Z[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[K].usedTimes++;const ve=Z[y.__cacheKey];ve!==void 0&&(Z[y.__cacheKey].usedTimes--,ve.usedTimes===0&&b(_)),y.__cacheKey=K,y.__webglTexture=Z[K].texture}return B}function j(y,_,B){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const Z=He(y,_),K=_.source;t.bindTexture(Y,y.__webglTexture,n.TEXTURE0+B);const ve=i.get(K);if(K.version!==ve.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const re=We.getPrimaries(We.workingColorSpace),oe=_.colorSpace===Pn?null:We.getPrimaries(_.colorSpace),Ve=_.colorSpace===Pn||re===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let te=M(_.image,!1,s.maxTextureSize);te=Pe(_,te);const pe=r.convert(_.format,_.colorSpace),we=r.convert(_.type);let Re=T(_.internalFormat,pe,we,_.colorSpace,_.isVideoTexture);ye(Y,_);let me;const Ge=_.mipmaps,Fe=_.isVideoTexture!==!0,nt=ve.__version===void 0||Z===!0,P=K.dataReady,ae=k(_,te);if(_.isDepthTexture)Re=E(_.format===Ni,_.type),nt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Re,te.width,te.height,0,pe,we,null));else if(_.isDataTexture)if(Ge.length>0){Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,Ge[0].width,Ge[0].height);for(let X=0,J=Ge.length;X<J;X++)me=Ge[X],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(n.TEXTURE_2D,X,Re,me.width,me.height,0,pe,we,me.data);_.generateMipmaps=!1}else Fe?(nt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,te.width,te.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,pe,we,te.data)):t.texImage2D(n.TEXTURE_2D,0,Re,te.width,te.height,0,pe,we,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,Ge[0].width,Ge[0].height,te.depth);for(let X=0,J=Ge.length;X<J;X++)if(me=Ge[X],_.format!==Zt)if(pe!==null)if(Fe){if(P)if(_.layerUpdates.size>0){const he=Jo(me.width,me.height,_.format,_.type);for(const le of _.layerUpdates){const Le=me.data.subarray(le*he/me.data.BYTES_PER_ELEMENT,(le+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,le,me.width,me.height,1,pe,Le)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,te.depth,pe,we,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,te.depth,0,pe,we,me.data)}else{Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,Ge[0].width,Ge[0].height);for(let X=0,J=Ge.length;X<J;X++)me=Ge[X],_.format!==Zt?pe!==null?Fe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(n.TEXTURE_2D,X,Re,me.width,me.height,0,pe,we,me.data)}else if(_.isDataArrayTexture)if(Fe){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,te.width,te.height,te.depth),P)if(_.layerUpdates.size>0){const X=Jo(te.width,te.height,_.format,_.type);for(const J of _.layerUpdates){const he=te.data.subarray(J*X/te.data.BYTES_PER_ELEMENT,(J+1)*X/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,pe,we,he)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,we,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,pe,we,te.data);else if(_.isData3DTexture)Fe?(nt&&t.texStorage3D(n.TEXTURE_3D,ae,Re,te.width,te.height,te.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,we,te.data)):t.texImage3D(n.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,pe,we,te.data);else if(_.isFramebufferTexture){if(nt)if(Fe)t.texStorage2D(n.TEXTURE_2D,ae,Re,te.width,te.height);else{let X=te.width,J=te.height;for(let he=0;he<ae;he++)t.texImage2D(n.TEXTURE_2D,he,Re,X,J,0,pe,we,null),X>>=1,J>>=1}}else if(Ge.length>0){if(Fe&&nt){const X=de(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ae,Re,X.width,X.height)}for(let X=0,J=Ge.length;X<J;X++)me=Ge[X],Fe?P&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,pe,we,me):t.texImage2D(n.TEXTURE_2D,X,Re,pe,we,me);_.generateMipmaps=!1}else if(Fe){if(nt){const X=de(te);t.texStorage2D(n.TEXTURE_2D,ae,Re,X.width,X.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,we,te)}else t.texImage2D(n.TEXTURE_2D,0,Re,pe,we,te);p(_)&&u(Y),ve.__version=K.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ee(y,_,B){if(_.image.length!==6)return;const Y=He(y,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+B);const K=i.get(Z);if(Z.version!==K.__version||Y===!0){t.activeTexture(n.TEXTURE0+B);const ve=We.getPrimaries(We.workingColorSpace),re=_.colorSpace===Pn?null:We.getPrimaries(_.colorSpace),oe=_.colorSpace===Pn||ve===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ve=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!Ve&&!te?pe[J]=M(_.image[J],!0,s.maxCubemapSize):pe[J]=te?_.image[J].image:_.image[J],pe[J]=Pe(_,pe[J]);const we=pe[0],Re=r.convert(_.format,_.colorSpace),me=r.convert(_.type),Ge=T(_.internalFormat,Re,me,_.colorSpace),Fe=_.isVideoTexture!==!0,nt=K.__version===void 0||Y===!0,P=Z.dataReady;let ae=k(_,we);ye(n.TEXTURE_CUBE_MAP,_);let X;if(Ve){Fe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ge,we.width,we.height);for(let J=0;J<6;J++){X=pe[J].mipmaps;for(let he=0;he<X.length;he++){const le=X[he];_.format!==Zt?Re!==null?Fe?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,le.width,le.height,Re,me,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ge,le.width,le.height,0,Re,me,le.data)}}}else{if(X=_.mipmaps,Fe&&nt){X.length>0&&ae++;const J=de(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(te){Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Re,me,pe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,pe[J].width,pe[J].height,0,Re,me,pe[J].data);for(let he=0;he<X.length;he++){const Le=X[he].image[J].image;Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Le.width,Le.height,Re,me,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ge,Le.width,Le.height,0,Re,me,Le.data)}}else{Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,me,pe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Re,me,pe[J]);for(let he=0;he<X.length;he++){const le=X[he];Fe?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Re,me,le.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ge,Re,me,le.image[J])}}}p(_)&&u(n.TEXTURE_CUBE_MAP),K.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function fe(y,_,B,Y,Z,K){const ve=r.convert(B.format,B.colorSpace),re=r.convert(B.type),oe=T(B.internalFormat,ve,re,B.colorSpace),Ve=i.get(_),te=i.get(B);if(te.__renderTarget=_,!Ve.__hasExternalTextures){const pe=Math.max(1,_.width>>K),we=Math.max(1,_.height>>K);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,oe,pe,we,_.depth,0,ve,re,null):t.texImage2D(Z,K,oe,pe,we,0,ve,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,te.__webglTexture,0,Be(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,te.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(y,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,K=E(_.stencilBuffer,Z),ve=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Be(_);ge(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,K,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,y)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const K=Y[Z],ve=r.convert(K.format,K.colorSpace),re=r.convert(K.type),oe=T(K.internalFormat,ve,re,K.colorSpace),Ve=Be(_);B&&ge(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,oe,_.width,_.height):ge(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const Z=Y.__webglTexture,K=Be(_);if(_.depthTexture.format===Ri)ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Ni)ge(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ae(y){const _=i.get(y),B=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const Y=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Te(_.__webglFramebuffer,y)}else if(B){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),se(_.__webglDepthbuffer[Y],y,!1);else{const Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),se(_.__webglDepthbuffer,y,!1);else{const Y=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(y,_,B){const Y=i.get(y);_!==void 0&&fe(Y.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ae(y)}function tt(y){const _=y.texture,B=i.get(y),Y=i.get(_);y.addEventListener("dispose",A);const Z=y.textures,K=y.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let oe=0;oe<_.mipmaps.length;oe++)B.__webglFramebuffer[re][oe]=n.createFramebuffer()}else B.__webglFramebuffer[re]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)B.__webglFramebuffer[re]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ve)for(let re=0,oe=Z.length;re<oe;re++){const Ve=i.get(Z[re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&ge(y)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const oe=Z[re];B.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Ve=r.convert(oe.format,oe.colorSpace),te=r.convert(oe.type),pe=T(oe.internalFormat,Ve,te,oe.colorSpace,y.isXRRenderTarget===!0),we=Be(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,pe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,B.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),se(B.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ye(n.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)fe(B.__webglFramebuffer[re][oe],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else fe(B.__webglFramebuffer[re],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,oe=Z.length;re<oe;re++){const Ve=Z[re],te=i.get(Ve);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),ye(n.TEXTURE_2D,Ve),fe(B.__webglFramebuffer,y,Ve,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),p(Ve)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(re=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),ye(re,_),_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)fe(B.__webglFramebuffer[oe],y,_,n.COLOR_ATTACHMENT0,re,oe);else fe(B.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,re,0);p(_)&&u(re),t.unbindTexture()}y.depthBuffer&&Ae(y)}function ze(y){const _=y.textures;for(let B=0,Y=_.length;B<Y;B++){const Z=_[B];if(p(Z)){const K=w(y),ve=i.get(Z).__webglTexture;t.bindTexture(K,ve),u(K),t.unbindTexture()}}}const ot=[],U=[];function Et(y){if(y.samples>0){if(ge(y)===!1){const _=y.textures,B=y.width,Y=y.height;let Z=n.COLOR_BUFFER_BIT;const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(y),re=_.length>1;if(re)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[oe]);const Ve=i.get(_[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,Z,n.NEAREST),l===!0&&(ot.length=0,U.length=0,ot.push(n.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ot.push(K),U.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[oe]);const Ve=i.get(_[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Be(y){return Math.min(s.maxSamples,y.samples)}function ge(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(y){const _=a.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function Pe(y,_){const B=y.colorSpace,Y=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==Oi&&B!==Pn&&(We.getTransfer(B)===Qe?(Y!==Zt||Z!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function de(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=Ne,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function _m(n,e){function t(i,s=Pn){let r;const a=We.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===Pa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===La)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_l)return n.BYTE;if(i===Ml)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===Ca)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===sn)return n.FLOAT;if(i===os)return n.HALF_FLOAT;if(i===xl)return n.ALPHA;if(i===Sl)return n.RGB;if(i===Zt)return n.RGBA;if(i===El)return n.LUMINANCE;if(i===bl)return n.LUMINANCE_ALPHA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Da)return n.RED;if(i===Ua)return n.RED_INTEGER;if(i===yl)return n.RG;if(i===Ia)return n.RG_INTEGER;if(i===Na)return n.RGBA_INTEGER;if(i===ks||i===Bs||i===zs||i===Vs)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jr||i===Kr||i===Zr||i===Jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qr||i===ea||i===ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qr||i===ea)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ta)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===na||i===ia||i===sa||i===ra||i===aa||i===oa||i===la||i===ca||i===ha||i===ua||i===da||i===fa||i===pa||i===ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===na)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ia)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ra)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===aa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===la)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hs||i===ga||i===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Hs)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tl||i===Ma||i===va||i===xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ii?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Mm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ti extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vm={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ti;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Tt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nn({vertexShader:xm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bm extends si{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const M=new Em,p=t.getContextAttributes();let u=null,w=null;const T=[],E=[],k=new Ie;let R=null;const A=new Ht;A.viewport=new ht;const L=new Ht;L.viewport=new ht;const b=[A,L],S=new Mm;let x=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=T[j];return ee===void 0&&(ee=new Lr,T[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=T[j];return ee===void 0&&(ee=new Lr,T[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=T[j];return ee===void 0&&(ee=new Lr,T[j]=ee),ee.getHandSpace()};function C(j){const ee=E.indexOf(j.inputSource);if(ee===-1)return;const fe=T[ee];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",$);for(let j=0;j<T.length;j++){const ee=E[j];ee!==null&&(E[j]=null,T[j].disconnect(ee))}x=null,F=null,M.reset(),e.setRenderTarget(u),m=null,f=null,d=null,s=null,w=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",V),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new ti(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,fe=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Ni:Ri,fe=p.stencil?Ii:ei);const Te={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new ti(f.textureWidth,f.textureHeight,{format:Zt,type:xn,depthTexture:new Hl(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(j){for(let ee=0;ee<j.removed.length;ee++){const fe=j.removed[ee],se=E.indexOf(fe);se>=0&&(E[se]=null,T[se].disconnect(fe))}for(let ee=0;ee<j.added.length;ee++){const fe=j.added[ee];let se=E.indexOf(fe);if(se===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=E.length){E.push(fe),se=Ae;break}else if(E[Ae]===null){E[Ae]=fe,se=Ae;break}if(se===-1)break}const Te=T[se];Te&&Te.connect(fe)}}const N=new z,H=new z;function O(j,ee,fe){N.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(fe.matrixWorld);const se=N.distanceTo(H),Te=ee.projectionMatrix.elements,Ae=fe.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),tt=Te[14]/(Te[10]+1),ze=(Te[9]+1)/Te[5],ot=(Te[9]-1)/Te[5],U=(Te[8]-1)/Te[0],Et=(Ae[8]+1)/Ae[0],Be=Ne*U,ge=Ne*Et,Me=se/(-U+Et),Pe=Me*-U;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Pe),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const de=Ne+Me,y=tt+Me,_=Be-Pe,B=ge+(se-Pe),Y=ze*tt/y*de,Z=ot*tt/y*de;j.projectionMatrix.makePerspective(_,B,Y,Z,de,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Q(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ee=j.near,fe=j.far;M.texture!==null&&(M.depthNear>0&&(ee=M.depthNear),M.depthFar>0&&(fe=M.depthFar)),S.near=L.near=A.near=ee,S.far=L.far=A.far=fe,(x!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),x=S.near,F=S.far),A.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,S.layers.mask=A.layers.mask|L.layers.mask;const se=j.parent,Te=S.cameras;Q(S,se);for(let Ae=0;Ae<Te.length;Ae++)Q(Te[Ae],se);Te.length===2?O(S,A,L):S.projectionMatrix.copy(A.projectionMatrix),q(j,S,se)};function q(j,ee,fe){fe===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Sa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let ue=null;function ye(j,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){const fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let se=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Ae=0;Ae<fe.length;Ae++){const Ne=fe[Ae];let tt=null;if(m!==null)tt=m.getViewport(Ne);else{const ot=d.getViewSubImage(f,Ne);tt=ot.viewport,Ae===0&&(e.setRenderTargetTextures(w,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(w))}let ze=b[Ae];ze===void 0&&(ze=new Ht,ze.layers.enable(Ae),ze.viewport=new ht,b[Ae]=ze),ze.matrix.fromArray(Ne.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ne.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(tt.x,tt.y,tt.width,tt.height),Ae===0&&(S.matrix.copy(ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(ze)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ae=d.getDepthInformation(fe[0]);Ae&&Ae.isValid&&Ae.texture&&M.init(e,Ae,s.renderState)}}for(let fe=0;fe<T.length;fe++){const se=E[fe],Te=T[fe];se!==null&&Te!==void 0&&Te.update(se,ee,c||a)}ue&&ue(j,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const He=new zl;He.setAnimationLoop(ye),this.setAnimationLoop=function(j){ue=j},this.dispose=function(){}}}const $n=new an,ym=new at;function Tm(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Ol(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,w,T,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),M(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,w,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const w=e.get(u),T=w.envMap,E=w.envMapRotation;T&&(p.envMap.value=T,$n.copy(E),$n.x*=-1,$n.y*=-1,$n.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),p.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler($n)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,w,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=T*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const w=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wm(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const E=T.program;i.uniformBlockBinding(w,E)}function c(w,T){let E=s[w.id];E===void 0&&(g(w),E=h(w),s[w.id]=E,w.addEventListener("dispose",p));const k=T.program;i.updateUBOMapping(w,k);const R=e.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function h(w){const T=d();w.__bindingPointIndex=T;const E=n.createBuffer(),k=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,k,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const T=s[w.id],E=w.uniforms,k=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,A=E.length;R<A;R++){const L=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,S=L.length;b<S;b++){const x=L[b];if(m(x,R,b,k)===!0){const F=x.__offset,C=Array.isArray(x.value)?x.value:[x.value];let V=0;for(let $=0;$<C.length;$++){const N=C[$],H=M(N);typeof N=="number"||typeof N=="boolean"?(x.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,F+V,x.__data)):N.isMatrix3?(x.__data[0]=N.elements[0],x.__data[1]=N.elements[1],x.__data[2]=N.elements[2],x.__data[3]=0,x.__data[4]=N.elements[3],x.__data[5]=N.elements[4],x.__data[6]=N.elements[5],x.__data[7]=0,x.__data[8]=N.elements[6],x.__data[9]=N.elements[7],x.__data[10]=N.elements[8],x.__data[11]=0):(N.toArray(x.__data,V),V+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,T,E,k){const R=w.value,A=T+"_"+E;if(k[A]===void 0)return typeof R=="number"||typeof R=="boolean"?k[A]=R:k[A]=R.clone(),!0;{const L=k[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return k[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(w){const T=w.uniforms;let E=0;const k=16;for(let A=0,L=T.length;A<L;A++){const b=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,x=b.length;S<x;S++){const F=b[S],C=Array.isArray(F.value)?F.value:[F.value];for(let V=0,$=C.length;V<$;V++){const N=C[V],H=M(N),O=E%k,Q=O%H.boundary,q=O+Q;E+=Q,q!==0&&k-q<H.storage&&(E+=k-q),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=H.storage}}}const R=E%k;return R>0&&(E+=k-R),w.__size=E,w.__cache={},this}function M(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function p(w){const T=w.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function u(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Am{constructor(e={}){const{canvas:t=ph(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),M=new Int32Array(4);let p=null,u=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Dn,this.toneMappingExposure=1;const E=this;let k=!1,R=0,A=0,L=null,b=-1,S=null;const x=new ht,F=new ht;let C=null;const V=new qe(0);let $=0,N=t.width,H=t.height,O=1,Q=null,q=null;const ue=new ht(0,0,N,H),ye=new ht(0,0,N,H);let He=!1;const j=new Fa;let ee=!1,fe=!1;const se=new at,Te=new at,Ae=new z,Ne=new ht,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ot(){return L===null?O:1}let U=i;function Et(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),U===null){const D="webgl2";if(U=Et(D,v),U===null)throw Et(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Be,ge,Me,Pe,de,y,_,B,Y,Z,K,ve,re,oe,Ve,te,pe,we,Re,me,Ge,Fe,nt,P;function ae(){Be=new Df(U),Be.init(),Fe=new _m(U,Be),ge=new wf(U,Be,e,Fe),Me=new pm(U,Be),ge.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),Pe=new Nf(U),de=new Qp,y=new gm(U,Be,Me,de,ge,Fe,Pe),_=new Rf(E),B=new Lf(E),Y=new Vh(U),nt=new yf(U,Y),Z=new Uf(U,Y,Pe,nt),K=new Of(U,Z,Y,Pe),Re=new Ff(U,ge,y),te=new Af(de),ve=new Jp(E,_,B,Be,ge,nt,te),re=new Tm(E,de),oe=new tm,Ve=new om(Be),we=new bf(E,_,B,Me,K,m,l),pe=new dm(E,K,ge),P=new wm(U,Pe,ge,Me),me=new Tf(U,Be,Pe),Ge=new If(U,Be,Pe),Pe.programs=ve.programs,E.capabilities=ge,E.extensions=Be,E.properties=de,E.renderLists=oe,E.shadowMap=pe,E.state=Me,E.info=Pe}ae();const X=new bm(E,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=Be.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Be.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(v){v!==void 0&&(O=v,this.setSize(N,H,!1))},this.getSize=function(v){return v.set(N,H)},this.setSize=function(v,D,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=v,H=D,t.width=Math.floor(v*O),t.height=Math.floor(D*O),G===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(N*O,H*O).floor()},this.setDrawingBufferSize=function(v,D,G){N=v,H=D,O=G,t.width=Math.floor(v*G),t.height=Math.floor(D*G),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(x)},this.getViewport=function(v){return v.copy(ue)},this.setViewport=function(v,D,G,W){v.isVector4?ue.set(v.x,v.y,v.z,v.w):ue.set(v,D,G,W),Me.viewport(x.copy(ue).multiplyScalar(O).round())},this.getScissor=function(v){return v.copy(ye)},this.setScissor=function(v,D,G,W){v.isVector4?ye.set(v.x,v.y,v.z,v.w):ye.set(v,D,G,W),Me.scissor(F.copy(ye).multiplyScalar(O).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(v){Me.setScissorTest(He=v)},this.setOpaqueSort=function(v){Q=v},this.setTransparentSort=function(v){q=v},this.getClearColor=function(v){return v.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(v=!0,D=!0,G=!0){let W=0;if(v){let I=!1;if(L!==null){const ne=L.texture.format;I=ne===Na||ne===Ia||ne===Ua}if(I){const ne=L.texture.type,ce=ne===xn||ne===ei||ne===ts||ne===Ii||ne===Pa||ne===La,xe=we.getClearColor(),Se=we.getClearAlpha(),Ce=xe.r,De=xe.g,Ee=xe.b;ce?(g[0]=Ce,g[1]=De,g[2]=Ee,g[3]=Se,U.clearBufferuiv(U.COLOR,0,g)):(M[0]=Ce,M[1]=De,M[2]=Ee,M[3]=Se,U.clearBufferiv(U.COLOR,0,M))}else W|=U.COLOR_BUFFER_BIT}D&&(W|=U.DEPTH_BUFFER_BIT),G&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),oe.dispose(),Ve.dispose(),de.dispose(),_.dispose(),B.dispose(),K.dispose(),nt.dispose(),P.dispose(),ve.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ga),X.removeEventListener("sessionend",Wa),Bn.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const v=Pe.autoReset,D=pe.enabled,G=pe.autoUpdate,W=pe.needsUpdate,I=pe.type;ae(),Pe.autoReset=v,pe.enabled=D,pe.autoUpdate=G,pe.needsUpdate=W,pe.type=I}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Le(v){const D=v.target;D.removeEventListener("dispose",Le),lt(D)}function lt(v){Mt(v),de.remove(v)}function Mt(v){const D=de.get(v).programs;D!==void 0&&(D.forEach(function(G){ve.releaseProgram(G)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,G,W,I,ne){D===null&&(D=tt);const ce=I.isMesh&&I.matrixWorld.determinant()<0,xe=ec(v,D,G,W,I);Me.setMaterial(W,ce);let Se=G.index,Ce=1;if(W.wireframe===!0){if(Se=Z.getWireframeAttribute(G),Se===void 0)return;Ce=2}const De=G.drawRange,Ee=G.attributes.position;let $e=De.start*Ce,it=(De.start+De.count)*Ce;ne!==null&&($e=Math.max($e,ne.start*Ce),it=Math.min(it,(ne.start+ne.count)*Ce)),Se!==null?($e=Math.max($e,0),it=Math.min(it,Se.count)):Ee!=null&&($e=Math.max($e,0),it=Math.min(it,Ee.count));const st=it-$e;if(st<0||st===1/0)return;nt.setup(I,W,xe,G,Se);let wt,Ye=me;if(Se!==null&&(wt=Y.get(Se),Ye=Ge,Ye.setIndex(wt)),I.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*ot()),Ye.setMode(U.LINES)):Ye.setMode(U.TRIANGLES);else if(I.isLine){let be=W.linewidth;be===void 0&&(be=1),Me.setLineWidth(be*ot()),I.isLineSegments?Ye.setMode(U.LINES):I.isLineLoop?Ye.setMode(U.LINE_LOOP):Ye.setMode(U.LINE_STRIP)}else I.isPoints?Ye.setMode(U.POINTS):I.isSprite&&Ye.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ye.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Ye.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const be=I._multiDrawStarts,cn=I._multiDrawCounts,je=I._multiDrawCount,Wt=Se?Y.get(Se).bytesPerElement:1,oi=de.get(W).currentProgram.getUniforms();for(let Lt=0;Lt<je;Lt++)oi.setValue(U,"_gl_DrawID",Lt),Ye.render(be[Lt]/Wt,cn[Lt])}else if(I.isInstancedMesh)Ye.renderInstances($e,st,I.count);else if(G.isInstancedBufferGeometry){const be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,cn=Math.min(G.instanceCount,be);Ye.renderInstances($e,st,cn)}else Ye.render($e,st)};function Je(v,D,G){v.transparent===!0&&v.side===gn&&v.forceSinglePass===!1?(v.side=Pt,v.needsUpdate=!0,fs(v,D,G),v.side=In,v.needsUpdate=!0,fs(v,D,G),v.side=gn):fs(v,D,G)}this.compile=function(v,D,G=null){G===null&&(G=v),u=Ve.get(G),u.init(D),T.push(u),G.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),v!==G&&v.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const W=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ne=I.material;if(ne)if(Array.isArray(ne))for(let ce=0;ce<ne.length;ce++){const xe=ne[ce];Je(xe,G,I),W.add(xe)}else Je(ne,G,I),W.add(ne)}),T.pop(),u=null,W},this.compileAsync=function(v,D,G=null){const W=this.compile(v,D,G);return new Promise(I=>{function ne(){if(W.forEach(function(ce){de.get(ce).currentProgram.isReady()&&W.delete(ce)}),W.size===0){I(v);return}setTimeout(ne,10)}Be.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Gt=null;function ln(v){Gt&&Gt(v)}function Ga(){Bn.stop()}function Wa(){Bn.start()}const Bn=new zl;Bn.setAnimationLoop(ln),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(v){Gt=v,X.setAnimationLoop(v),v===null?Bn.stop():Bn.start()},X.addEventListener("sessionstart",Ga),X.addEventListener("sessionend",Wa),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,D,L),u=Ve.get(v,T.length),u.init(D),T.push(u),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(Te),fe=this.localClippingEnabled,ee=te.init(this.clippingPlanes,fe),p=oe.get(v,w.length),p.init(),w.push(p),X.enabled===!0&&X.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&tr(ne,D,-1/0,E.sortObjects)}tr(v,D,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(Q,q),ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ze&&we.addToRenderList(p,v),this.info.render.frame++,ee===!0&&te.beginShadows();const G=u.state.shadowsArray;pe.render(G,v,D),ee===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,I=p.transmissive;if(u.setupLights(),D.isArrayCamera){const ne=D.cameras;if(I.length>0)for(let ce=0,xe=ne.length;ce<xe;ce++){const Se=ne[ce];Xa(W,I,v,Se)}ze&&we.render(v);for(let ce=0,xe=ne.length;ce<xe;ce++){const Se=ne[ce];$a(p,v,Se,Se.viewport)}}else I.length>0&&Xa(W,I,v,D),ze&&we.render(v),$a(p,v,D);L!==null&&(y.updateMultisampleRenderTarget(L),y.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(E,v,D),nt.resetDefaultState(),b=-1,S=null,T.pop(),T.length>0?(u=T[T.length-1],ee===!0&&te.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function tr(v,D,G,W){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){W&&Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Te);const ce=K.update(v),xe=v.material;xe.visible&&p.push(v,ce,xe,G,Ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||j.intersectsObject(v))){const ce=K.update(v),xe=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ne.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ne.copy(ce.boundingSphere.center)),Ne.applyMatrix4(v.matrixWorld).applyMatrix4(Te)),Array.isArray(xe)){const Se=ce.groups;for(let Ce=0,De=Se.length;Ce<De;Ce++){const Ee=Se[Ce],$e=xe[Ee.materialIndex];$e&&$e.visible&&p.push(v,ce,$e,G,Ne.z,Ee)}}else xe.visible&&p.push(v,ce,xe,G,Ne.z,null)}}const ne=v.children;for(let ce=0,xe=ne.length;ce<xe;ce++)tr(ne[ce],D,G,W)}function $a(v,D,G,W){const I=v.opaque,ne=v.transmissive,ce=v.transparent;u.setupLightsView(G),ee===!0&&te.setGlobalState(E.clippingPlanes,G),W&&Me.viewport(x.copy(W)),I.length>0&&ds(I,D,G),ne.length>0&&ds(ne,D,G),ce.length>0&&ds(ce,D,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Xa(v,D,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new ti(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?os:xn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const ne=u.state.transmissionRenderTarget[W.id],ce=W.viewport||x;ne.setSize(ce.z,ce.w);const xe=E.getRenderTarget();E.setRenderTarget(ne),E.getClearColor(V),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear(),ze&&we.render(G);const Se=E.toneMapping;E.toneMapping=Dn;const Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ee===!0&&te.setGlobalState(E.clippingPlanes,W),ds(v,G,W),y.updateMultisampleRenderTarget(ne),y.updateRenderTargetMipmap(ne),Be.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ee=0,$e=D.length;Ee<$e;Ee++){const it=D[Ee],st=it.object,wt=it.geometry,Ye=it.material,be=it.group;if(Ye.side===gn&&st.layers.test(W.layers)){const cn=Ye.side;Ye.side=Pt,Ye.needsUpdate=!0,qa(st,G,W,wt,Ye,be),Ye.side=cn,Ye.needsUpdate=!0,De=!0}}De===!0&&(y.updateMultisampleRenderTarget(ne),y.updateRenderTargetMipmap(ne))}E.setRenderTarget(xe),E.setClearColor(V,$),Ce!==void 0&&(W.viewport=Ce),E.toneMapping=Se}function ds(v,D,G){const W=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ne=v.length;I<ne;I++){const ce=v[I],xe=ce.object,Se=ce.geometry,Ce=W===null?ce.material:W,De=ce.group;xe.layers.test(G.layers)&&qa(xe,D,G,Se,Ce,De)}}function qa(v,D,G,W,I,ne){v.onBeforeRender(E,D,G,W,I,ne),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(E,D,G,W,v,ne),I.transparent===!0&&I.side===gn&&I.forceSinglePass===!1?(I.side=Pt,I.needsUpdate=!0,E.renderBufferDirect(G,D,W,I,v,ne),I.side=In,I.needsUpdate=!0,E.renderBufferDirect(G,D,W,I,v,ne),I.side=gn):E.renderBufferDirect(G,D,W,I,v,ne),v.onAfterRender(E,D,G,W,I,ne)}function fs(v,D,G){D.isScene!==!0&&(D=tt);const W=de.get(v),I=u.state.lights,ne=u.state.shadowsArray,ce=I.state.version,xe=ve.getParameters(v,I.state,ne,D,G),Se=ve.getProgramCacheKey(xe);let Ce=W.programs;W.environment=v.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(v.isMeshStandardMaterial?B:_).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Le),Ce=new Map,W.programs=Ce);let De=Ce.get(Se);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===ce)return ja(v,xe),De}else xe.uniforms=ve.getUniforms(v),v.onBeforeCompile(xe,E),De=ve.acquireProgram(xe,Se),Ce.set(Se,De),W.uniforms=xe.uniforms;const Ee=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=te.uniform),ja(v,xe),W.needsLights=nc(v),W.lightsStateVersion=ce,W.needsLights&&(Ee.ambientLightColor.value=I.state.ambient,Ee.lightProbe.value=I.state.probe,Ee.directionalLights.value=I.state.directional,Ee.directionalLightShadows.value=I.state.directionalShadow,Ee.spotLights.value=I.state.spot,Ee.spotLightShadows.value=I.state.spotShadow,Ee.rectAreaLights.value=I.state.rectArea,Ee.ltc_1.value=I.state.rectAreaLTC1,Ee.ltc_2.value=I.state.rectAreaLTC2,Ee.pointLights.value=I.state.point,Ee.pointLightShadows.value=I.state.pointShadow,Ee.hemisphereLights.value=I.state.hemi,Ee.directionalShadowMap.value=I.state.directionalShadowMap,Ee.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ee.spotShadowMap.value=I.state.spotShadowMap,Ee.spotLightMatrix.value=I.state.spotLightMatrix,Ee.spotLightMap.value=I.state.spotLightMap,Ee.pointShadowMap.value=I.state.pointShadowMap,Ee.pointShadowMatrix.value=I.state.pointShadowMatrix),W.currentProgram=De,W.uniformsList=null,De}function Ya(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Ws.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function ja(v,D){const G=de.get(v);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function ec(v,D,G,W,I){D.isScene!==!0&&(D=tt),y.resetTextureUnits();const ne=D.fog,ce=W.isMeshStandardMaterial?D.environment:null,xe=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Oi,Se=(W.isMeshStandardMaterial?B:_).get(W.envMap||ce),Ce=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ee=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,it=!!G.morphAttributes.color;let st=Dn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(st=E.toneMapping);const wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ye=wt!==void 0?wt.length:0,be=de.get(W),cn=u.state.lights;if(ee===!0&&(fe===!0||v!==S)){const Bt=v===S&&W.id===b;te.setState(W,v,Bt)}let je=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==cn.state.version||be.outputColorSpace!==xe||I.isBatchedMesh&&be.batching===!1||!I.isBatchedMesh&&be.batching===!0||I.isBatchedMesh&&be.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&be.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&be.instancing===!1||!I.isInstancedMesh&&be.instancing===!0||I.isSkinnedMesh&&be.skinning===!1||!I.isSkinnedMesh&&be.skinning===!0||I.isInstancedMesh&&be.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&be.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&be.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&be.instancingMorph===!1&&I.morphTexture!==null||be.envMap!==Se||W.fog===!0&&be.fog!==ne||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==te.numPlanes||be.numIntersection!==te.numIntersection)||be.vertexAlphas!==Ce||be.vertexTangents!==De||be.morphTargets!==Ee||be.morphNormals!==$e||be.morphColors!==it||be.toneMapping!==st||be.morphTargetsCount!==Ye)&&(je=!0):(je=!0,be.__version=W.version);let Wt=be.currentProgram;je===!0&&(Wt=fs(W,D,I));let oi=!1,Lt=!1,zi=!1;const rt=Wt.getUniforms(),Qt=be.uniforms;if(Me.useProgram(Wt.program)&&(oi=!0,Lt=!0,zi=!0),W.id!==b&&(b=W.id,Lt=!0),oi||S!==v){Me.buffers.depth.getReversed()?(se.copy(v.projectionMatrix),gh(se),_h(se),rt.setValue(U,"projectionMatrix",se)):rt.setValue(U,"projectionMatrix",v.projectionMatrix),rt.setValue(U,"viewMatrix",v.matrixWorldInverse);const Sn=rt.map.cameraPosition;Sn!==void 0&&Sn.setValue(U,Ae.setFromMatrixPosition(v.matrixWorld)),ge.logarithmicDepthBuffer&&rt.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rt.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Lt=!0,zi=!0)}if(I.isSkinnedMesh){rt.setOptional(U,I,"bindMatrix"),rt.setOptional(U,I,"bindMatrixInverse");const Bt=I.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),rt.setValue(U,"boneTexture",Bt.boneTexture,y))}I.isBatchedMesh&&(rt.setOptional(U,I,"batchingTexture"),rt.setValue(U,"batchingTexture",I._matricesTexture,y),rt.setOptional(U,I,"batchingIdTexture"),rt.setValue(U,"batchingIdTexture",I._indirectTexture,y),rt.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&rt.setValue(U,"batchingColorTexture",I._colorsTexture,y));const Vi=G.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&Re.update(I,G,Wt),(Lt||be.receiveShadow!==I.receiveShadow)&&(be.receiveShadow=I.receiveShadow,rt.setValue(U,"receiveShadow",I.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=Se,Qt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&D.environment!==null&&(Qt.envMapIntensity.value=D.environmentIntensity),Lt&&(rt.setValue(U,"toneMappingExposure",E.toneMappingExposure),be.needsLights&&tc(Qt,zi),ne&&W.fog===!0&&re.refreshFogUniforms(Qt,ne),re.refreshMaterialUniforms(Qt,W,O,H,u.state.transmissionRenderTarget[v.id]),Ws.upload(U,Ya(be),Qt,y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ws.upload(U,Ya(be),Qt,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rt.setValue(U,"center",I.center),rt.setValue(U,"modelViewMatrix",I.modelViewMatrix),rt.setValue(U,"normalMatrix",I.normalMatrix),rt.setValue(U,"modelMatrix",I.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Bt=W.uniformsGroups;for(let Sn=0,En=Bt.length;Sn<En;Sn++){const Ka=Bt[Sn];P.update(Ka,Wt),P.bind(Ka,Wt)}}return Wt}function tc(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function nc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,D,G){de.get(v.texture).__webglTexture=D,de.get(v.depthTexture).__webglTexture=G;const W=de.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,D){const G=de.get(v);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,G=0){L=v,R=D,A=G;let W=!0,I=null,ne=!1,ce=!1;if(v){const Se=de.get(v);if(Se.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(Se.__hasExternalTextures)y.rebindTextures(v,de.get(v.texture).__webglTexture,de.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ee=v.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&de.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ce=!0);const De=de.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[D])?I=De[D][G]:I=De[D],ne=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?I=de.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?I=De[G]:I=De,x.copy(v.viewport),F.copy(v.scissor),C=v.scissorTest}else x.copy(ue).multiplyScalar(O).floor(),F.copy(ye).multiplyScalar(O).floor(),C=He;if(Me.bindFramebuffer(U.FRAMEBUFFER,I)&&W&&Me.drawBuffers(v,I),Me.viewport(x),Me.scissor(F),Me.setScissorTest(C),ne){const Se=de.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Se.__webglTexture,G)}else if(ce){const Se=de.get(v.texture),Ce=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Ce)}b=-1},this.readRenderTargetPixels=function(v,D,G,W,I,ne,ce){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=de.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){Me.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Se=v.texture,Ce=Se.format,De=Se.type;if(!ge.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-W&&G>=0&&G<=v.height-I&&U.readPixels(D,G,W,I,Fe.convert(Ce),Fe.convert(De),ne)}finally{const Se=L!==null?de.get(L).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(v,D,G,W,I,ne,ce){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=de.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){const Se=v.texture,Ce=Se.format,De=Se.type;if(!ge.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=v.width-W&&G>=0&&G<=v.height-I){Me.bindFramebuffer(U.FRAMEBUFFER,xe);const Ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),U.readPixels(D,G,W,I,Fe.convert(Ce),Fe.convert(De),0);const $e=L!==null?de.get(L).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,$e);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mh(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne),U.deleteBuffer(Ee),U.deleteSync(it),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,D=null,G=0){v.isTexture!==!0&&(Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,v=arguments[1]);const W=Math.pow(2,-G),I=Math.floor(v.image.width*W),ne=Math.floor(v.image.height*W),ce=D!==null?D.x:0,xe=D!==null?D.y:0;y.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,ce,xe,I,ne),Me.unbindTexture()},this.copyTextureToTexture=function(v,D,G=null,W=null,I=0){v.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],D=arguments[2],I=arguments[3]||0,G=null);let ne,ce,xe,Se,Ce,De,Ee,$e,it;const st=v.isCompressedTexture?v.mipmaps[I]:v.image;G!==null?(ne=G.max.x-G.min.x,ce=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Se=G.min.x,Ce=G.min.y,De=G.isBox3?G.min.z:0):(ne=st.width,ce=st.height,xe=st.depth||1,Se=0,Ce=0,De=0),W!==null?(Ee=W.x,$e=W.y,it=W.z):(Ee=0,$e=0,it=0);const wt=Fe.convert(D.format),Ye=Fe.convert(D.type);let be;D.isData3DTexture?(y.setTexture3D(D,0),be=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),be=U.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),be=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const cn=U.getParameter(U.UNPACK_ROW_LENGTH),je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Wt=U.getParameter(U.UNPACK_SKIP_PIXELS),oi=U.getParameter(U.UNPACK_SKIP_ROWS),Lt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);const zi=v.isDataArrayTexture||v.isData3DTexture,rt=D.isDataArrayTexture||D.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Qt=de.get(v),Vi=de.get(D),Bt=de.get(Qt.__renderTarget),Sn=de.get(Vi.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let En=0;En<xe;En++)zi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(v).__webglTexture,I,De+En),v.isDepthTexture?(rt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(D).__webglTexture,I,it+En),U.blitFramebuffer(Se,Ce,ne,ce,Ee,$e,ne,ce,U.DEPTH_BUFFER_BIT,U.NEAREST)):rt?U.copyTexSubImage3D(be,I,Ee,$e,it+En,Se,Ce,ne,ce):U.copyTexSubImage2D(be,I,Ee,$e,it+En,Se,Ce,ne,ce);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else rt?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(be,I,Ee,$e,it,ne,ce,xe,wt,Ye,st.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(be,I,Ee,$e,it,ne,ce,xe,wt,st.data):U.texSubImage3D(be,I,Ee,$e,it,ne,ce,xe,wt,Ye,st):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,Ee,$e,ne,ce,wt,Ye,st.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,Ee,$e,st.width,st.height,wt,st.data):U.texSubImage2D(U.TEXTURE_2D,I,Ee,$e,ne,ce,wt,Ye,st);U.pixelStorei(U.UNPACK_ROW_LENGTH,cn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,oi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lt),I===0&&D.generateMipmaps&&U.generateMipmap(be),Me.unbindTexture()},this.copyTextureToTexture3D=function(v,D,G=null,W=null,I=0){return v.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,v=arguments[2],D=arguments[3],I=arguments[4]||0),Ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,G,W,I)},this.initRenderTarget=function(v){de.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){R=0,A=0,L=null,Me.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class Rm extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cm extends Tt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=kt,h=kt,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo extends Jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ei=new at,el=new at,Ns=[],tl=new kn,Pm=new at,qi=new Ct,Yi=new cs;class Lm extends Ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Pm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ei),tl.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ei),Yi.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(Yi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(i),e.ray.intersectsSphere(Yi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ei),el.multiplyMatrices(i,Ei),qi.matrixWorld=el,qi.raycast(e,Ns);for(let a=0,o=Ns.length;a<o;a++){const l=Ns[a];l.instanceId=r,l.object=this,t.push(l)}Ns.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cm(new Float32Array(s*this.count),s,this.count,Da,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Dm extends hs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ql extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Dr=new at,nl=new z,il=new z;class Um{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(nl),il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(il),t.updateMatrixWorld(),Dr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Im extends Um{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sl extends ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nm extends ql{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fm extends si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);const al={type:"change"},ka={type:"start"},Yl={type:"end"},Fs=new Ll,ol=new Cn,Om=Math.cos(70*fh.DEG2RAD),ft=new z,Rt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ur=1e-6;class km extends Fm{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ni,this._lastTargetPosition=new z,this._quat=new ni().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rl,this._sphericalDelta=new rl,this._scale=1,this._panOffset=new z,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new z,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zm.bind(this),this._onPointerDown=Bm.bind(this),this._onPointerUp=Vm.bind(this),this._onContextMenu=Ym.bind(this),this._onMouseWheel=Wm.bind(this),this._onKeyDown=$m.bind(this),this._onTouchStart=Xm.bind(this),this._onTouchMove=qm.bind(this),this._onMouseDown=Hm.bind(this),this._onMouseMove=Gm.bind(this),this._interceptControlDown=jm.bind(this),this._interceptControlUp=Km.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(al),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;ft.copy(t).sub(this.target),ft.applyQuaternion(this._quat),this._spherical.setFromVector3(ft),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Rt:i>Math.PI&&(i-=Rt),s<-Math.PI?s+=Rt:s>Math.PI&&(s-=Rt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ft.setFromSpherical(this._spherical),ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ft.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fs.origin.copy(this.object.position),Fs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fs.direction))<Om?this.object.lookAt(this.target):(ol.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fs.intersectPlane(ol,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ur||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ur||this._lastTargetPosition.distanceToSquared(this.target)>Ur?(this.dispatchEvent(al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rt/60*this.autoRotateSpeed*e:Rt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ft.setFromMatrixColumn(t,0),ft.multiplyScalar(-e),this._panOffset.add(ft)}_panUp(e,t){this.screenSpacePanning===!0?ft.setFromMatrixColumn(t,1):(ft.setFromMatrixColumn(t,0),ft.crossVectors(this.object.up,ft)),ft.multiplyScalar(e),this._panOffset.add(ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ft.copy(s).sub(this.target);let r=ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Bm(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function zm(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vm(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yl),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hm(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=et.DOLLY;break;case wi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}break;case wi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ka)}function Gm(n){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Wm(n){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(n.preventDefault(),this.dispatchEvent(ka),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yl))}function $m(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Xm(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=et.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=et.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ka)}function qm(n){switch(this._trackPointer(n),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=et.NONE}}function Ym(n){this.enabled!==!1&&n.preventDefault()}function jm(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Km(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ut={post:7239294,beam:9542048,rafter:11844288,slat:14146527,gate:5857640,panel:8303826,wall:14997960,ground:13227200,brace:10240545};function Zm(n){const e=new Am({canvas:n,antialias:!1,alpha:!1,powerPreference:"low-power"});e.setClearColor(15196630,1);const t=new Rm,i=new Ht(38,1,10,2e5),s=new km(i,n);s.enableDamping=!1,s.enablePan=!1,s.rotateSpeed=.7,s.zoomSpeed=.85;let r=!1;s.addEventListener("start",()=>{r=!0}),s.addEventListener("change",()=>e.render(t,i)),t.add(new Nm(16777215,.74));const a=new sl(16777215,.9);a.position.set(4,8,5),t.add(a);const o=new sl(16773860,.28);o.position.set(-5,3,-3),t.add(o);const l=new Ti,c=new Ti;l.add(c),t.add(l);const h=new Map,d=new ki(1,1,1),f=new _t;let m=null;function g(x,F=1){const C=`${x}:${F}`;return h.has(C)||h.set(C,new Dm({color:x,metalness:.5,roughness:.42,transparent:F<1,opacity:F,depthWrite:F===1})),h.get(C)}function M(x,F,C,V,$,N,H,O=1){const Q=new Ct(d,g(H,O));Q.position.set(x,F,C),Q.scale.set(Math.max(V,1),Math.max($,1),Math.max(N,1)),c.add(Q)}function p(x,F){if(!x.length)return;const C=new Lm(d,g(F),x.length);x.forEach((V,$)=>{f.position.set(V.x,V.y,V.z),f.rotation.set(V.rx||0,V.ry||0,V.rz||0),f.scale.set(Math.max(V.sx,1),Math.max(V.sy,1),Math.max(V.sz,1)),f.updateMatrix(),C.setMatrixAt($,f.matrix)}),C.instanceMatrix.needsUpdate=!0,c.add(C)}function u(){for(;c.children.length;)c.remove(c.children[0]);for(const x of[...l.children])x!==c&&l.remove(x)}function w(x,F,C,V){const $=new Ct(d,g(ut.ground));$.position.set(x,-10,F),$.scale.set(C,16,V),l.add($)}function T(x){m=x,u(),x&&E(x),r||L(x),e.render(t,i)}function E(x){x.kind==="pergola"?k(x):x.kind==="fence"?R(x):A(x)}function k(x){var Q;const F=x.heightMm,C=x.beam.drop,V=x.rafter.drop,$=x.depthMm+x.overhangMm;w(x.lengthMm/2,$/2,x.lengthMm+700,$+700),x.mount==="wall"&&M(x.lengthMm/2,x.wallHeightMm/2,-100,x.lengthMm+500,x.wallHeightMm,180,ut.wall);for(const q of x.posts)M(q.x,F/2,q.z,x.post.along,F,x.post.depth,ut.post);for(const q of x.beams)q.axis==="x"?M(q.x,F+C/2,q.z,q.length,C,x.beam.plan,ut.beam):M(q.x,F+C/2,q.z,x.beam.plan,C,q.length,ut.beam);const N=F+C+V/2;for(const q of x.rafters)M(q.x,N,(q.z0+q.z1)/2,q.plan,V,q.z1-q.z0,ut.rafter);const H=((Q=x.slatMeta)==null?void 0:Q.thick)||16,O=F+C+V+H/2;p((x.slats||[]).map(q=>({x:(q.x0+q.x1)/2,y:O,z:q.z,sx:Math.max(q.length,1),sy:q.thick,sz:q.face})),ut.slat);for(const q of x.panels||[])M(q.x+q.w/2,F+C+V+8,q.z+q.d/2,q.w,14,q.d,ut.panel,.5)}function R(x){w(x.lengthMm/2,0,x.lengthMm+500,700);for(const N of x.posts)M(N.x,x.heightMm/2,0,x.post.along,x.heightMm,x.post.depth,N.role==="jamb"?ut.gate:ut.post);const F=x.slat.face,C=x.slat.gap,V=x.slat.thick,$=[];for(const N of x.bays)if(N.slatLen>0)for(let H=0;H<x.slat.rows;H+=1)$.push({x:(N.left+N.right)/2,y:x.slat.bottom+F/2+H*(F+C),z:x.post.depth/2+V/2,sx:N.slatLen,sy:F,sz:V});p($,ut.slat);for(const N of x.gates){if(!(N.stileW>0))continue;const H=x.post.depth/2+18,O=Math.max(N.stileW*.7,30);if(M(N.leafLeft+N.stileW/2,x.heightMm/2,H,N.stileW,x.heightMm,O,ut.gate),M(N.leafRight-N.stileW/2,x.heightMm/2,H,N.stileW,x.heightMm,O,ut.gate),N.railLen>0){const Q=(N.leafLeft+N.leafRight)/2;M(Q,x.heightMm-N.railH/2,H,N.railLen,N.railH,O,ut.gate),M(Q,N.railH/2,H,N.railLen,N.railH,O,ut.gate);const q=x.heightMm-2*N.railH,ue=Math.hypot(N.railLen,q),ye=new Ct(d,g(ut.brace));ye.position.set(Q,N.railH+q/2,H),ye.scale.set(ue,16,16),ye.rotation.z=Math.atan2(q,N.railLen),c.add(ye)}}}function A(x){var F;w(x.lengthMm/2,0,x.lengthMm+400,500);for(const C of x.posts)M(C.x,x.heightMm/2,0,x.post.along,x.heightMm,x.post.depth,ut.post);if(M(x.lengthMm/2,x.heightMm-x.hand.face/2,0,x.lengthMm,x.hand.face,x.hand.thick,ut.beam),x.bottom.face>0&&M(x.lengthMm/2,x.bottom.face/2,0,x.lengthMm,x.bottom.face,x.bottom.thick,ut.beam),x.infill==="horizontal"&&x.fill&&x.rows>0){const C=x.rows*x.fill.face+(x.rows-1)*x.gapMm,V=[];for(const $ of x.bays){if(!($.slatLen>0))continue;let N=x.bottom.face+(x.usable-C)/2;for(let H=0;H<x.rows;H+=1)V.push({x:($.left+$.right)/2,y:N+x.fill.face/2,z:x.post.depth/2,sx:$.slatLen,sy:x.fill.face,sz:x.fill.thick}),N+=x.fill.face+x.gapMm}p(V,ut.slat)}x.fill&&((F=x.balusters)!=null&&F.length)&&p(x.balusters.map(C=>({x:C.x,y:x.bottom.face+C.length/2,z:0,sx:x.fill.face,sy:C.length,sz:x.fill.thick})),ut.slat)}function L(x){const F=new kn().setFromObject(c);if(F.isEmpty())return;const C=F.getSize(new z),V=F.getCenter(new z),$=Math.max(C.x,C.y,C.z,800),N=$/(2*Math.tan(i.fov*Math.PI/360))*1.28;if((x==null?void 0:x.kind)==="pergola")i.position.set(V.x+N*.62,V.y+N*.48,V.z+N*.82);else{const H=Math.max(C.y*2.6,C.x*.38,1600);i.position.set(V.x+C.x*.08,V.y+C.y*.85,V.z+H)}i.near=Math.max(8,$/80),i.far=$*30,i.updateProjectionMatrix(),s.target.copy(V),s.minDistance=$*.2,s.maxDistance=$*8,s.update()}function b(){const x=n.clientWidth,F=n.clientHeight;!x||!F||(e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.setSize(x,F,!1),i.aspect=x/F,i.updateProjectionMatrix(),e.render(t,i))}function S(){r=!1,m&&L(m),e.render(t,i)}return{setLayout:T,resize:b,reset:S}}function Jm(n,e){const t=[];if(t.push(e.title),e.subtitle&&t.push(e.subtitle),t.push(""),!(n!=null&&n.ok)){t.push("אין רשימה.");for(const i of(n==null?void 0:n.errors)||[])t.push(i);return t.join(`
`)}t.push("רשימת חיתוך");for(const i of n.lines){const s=i.catalogNumber?` (${i.catalogNumber})`:"",r=i.generic?" [מידה כללית]":"",a=i.cutMm!==i.nominalMm?`, חיתוך ${i.cutMm} מ״מ`:"";t.push(`${i.label} — ${i.profileName}${s}${r} — ${i.nominalMm} מ״מ${a} × ${i.qty}`)}t.push(""),t.push("מוטות");for(const i of n.packing){if(i.kind==="sheet"){t.push(`${i.profileName}: ${i.barCount} לוחות ${i.stockLabel}, ${i.pieceCount} מודולים, פחת שטח ${(i.wastePct*100).toFixed(0)}%`);continue}if(i.error){t.push(`${i.profileName}: ${i.error}`);continue}const s=i.stockAssumed?" (אורך שלא אומת בקטלוג)":"";t.push(`${i.profileName}${i.catalogNumber?` (${i.catalogNumber})`:""}: ${i.barCount} מוטות של ${Qm(i.stockMm)}${s}, פחת ${i.wasteMm} מ״מ (${(i.wastePct*100).toFixed(1)}%)`);for(const r of i.bars){const a=r.cuts.map(o=>o.lengthMm+(o.part?` חלק ${o.part}/${o.parts}`:"")).join(" + ");t.push(`  מוט ${r.index}: ${a} · פחת ${r.wasteMm} מ״מ`)}i.orderKg!=null&&t.push(`  משקל מוטות כ־${i.orderKg.toFixed(1)} ק״ג`)}t.push(""),t.push("הנחות");for(const i of n.assumptions)t.push(`• ${i}`);for(const i of n.warnings)t.push(`• ${i}`);return t.push(""),t.push("כמויות בלבד, בלי מחיר ובלי בדיקת חוזק."),t.join(`
`)}function Qm(n){return`${(n/1e3).toFixed(2)} מ׳`}const jl="kamuyot.v1";function on(){try{return JSON.parse(localStorage.getItem(jl))||{}}catch{return{}}}function ai(n){localStorage.setItem(jl,JSON.stringify(n))}function us(n,e){var r,a,o;const t=((r=e.profiles)==null?void 0:r.overrides)||{},i=new Set(((a=e.profiles)==null?void 0:a.hidden)||[]);return n.filter(l=>!i.has(l.id)).map(l=>({...l,...t[l.id]||{},builtin:!0})).concat(((o=e.profiles)==null?void 0:o.custom)||[])}const eg=[["post","עמוד פרגולה"],["fencePost","עמוד גדר"],["jamb","עמוד מזוזה"],["railingPost","עמוד מעקה"],["beam","קורה ראשית"],["rafter","קורת משנה"],["slat","שלב הצללה"],["fenceSlat","שלב גדר"],["gateFrame","מסגרת שער"],["edge","פרופיל שפה"],["handrail","מאחז יד"],["bottomRail","מסילה תחתונה"],["railingInfill","מילוי מעקה"],["panel","לוח"]],Kl=on();let Fn=us(is,Kl);const _e={screen:"calc",preview:"3d",compact:!1,projectName:"",editing:null,query:"",spec:Kl.draft||ng()},tg=document.querySelector("#app");tg.innerHTML=`
  <div class="app">
    <div class="sticky">
      <div class="brand">
        <h1>כמויות <span>אלומיניום</span></h1>
        <small id="net">כמויות בלבד</small>
      </div>
      <div class="switch" id="kind-switch">
        <button type="button" data-kind="pergola">פרגולה</button>
        <button type="button" data-kind="fence">גדר</button>
        <button type="button" data-kind="railing">מעקה</button>
      </div>
      <div class="stage" id="stage" data-mode="3d">
        <div class="modes">
          <button type="button" data-preview="3d">תלת־ממד</button>
          <button type="button" data-preview="plan">תוכנית</button>
          <button type="button" data-preview="elev">חזית</button>
        </div>
        <canvas id="view3d"></canvas>
        <div class="svg-slot" id="svg-slot"></div>
        <button class="reset-view" type="button" id="reset-view">מבט</button>
      </div>
      <p class="summary" id="summary"></p>
    </div>
    <main>
      <div id="form"></div>
      <div id="results"></div>
    </main>
    <nav class="tabbar">
      <button type="button" data-screen="calc">חישוב</button>
      <button type="button" data-screen="profiles">פרופילים</button>
      <button type="button" data-screen="projects">פרויקטים</button>
    </nav>
    <div id="toast"></div>
  </div>
`;const Qn=Zm(document.getElementById("view3d")),ns=document.getElementById("stage");new ResizeObserver(()=>Qn.resize()).observe(ns);document.body.addEventListener("click",ig);document.body.addEventListener("input",Zl);document.body.addEventListener("change",Zl);document.getElementById("reset-view").addEventListener("click",()=>Qn.reset());let ll=0;Ba("calc");Ft();Pg();function ng(){return{kind:"pergola",pergola:{mount:"wall",roof:"slats",lengthM:6,depthM:3,heightM:2.5,wallHeightM:2.7,postSpacingM:3,rafterSpacingM:1,slatGapMm:20,slatClearanceMm:6,overhangMm:0,slatMode:"continuous",embedMm:0,coverMm:"",profiles:{post:"panda-f100100",beam:"panda-f10040",rafter:"panda-f10040",slat:"panda-pa1121",edge:"panda-1358a",panel:"polygal-1050x6000"}},fence:{lengthM:10,heightM:1,postSpacingM:2,slatGapMm:10,bottomMm:40,topMm:20,slatClearanceMm:6,hingeGapMm:10,embedMm:0,gates:[{kind:"gate",widthM:4,qty:1}],profiles:{post:"panda-f100100",slat:"panda-pa1121",frame:"panda-i234"}},railing:{lengthM:4,heightM:1.05,postSpacingM:1.2,infill:"vertical",gapMm:100,slatClearanceMm:0,embedMm:0,profiles:{post:"panda-3602",handrail:"panda-pa1160",bottom:"panda-pa046",infill:"panda-f2020"}},cutting:{kerfMm:3,allowanceMm:0,endTrimMm:0,spliceOverlapMm:200,stockMode:"preferred",preferredStockM:6}}}function ig(n){const e=n.target.closest("button");e&&(e.dataset.kind?(_e.spec.kind=e.dataset.kind,_n(),Ft(),ba()):e.dataset.preview?(_e.preview=e.dataset.preview,Ha(),Ft()):e.dataset.screen?Ba(e.dataset.screen):e.dataset.mount?(_e.spec.pergola.mount=e.dataset.mount,_n(),Ft()):e.dataset.roof?(_e.spec.pergola.roof=e.dataset.roof,_n(),Ft()):e.dataset.slatMode?(_e.spec.pergola.slatMode=e.dataset.slatMode,_n(),Ft()):e.dataset.infill?(_e.spec.railing.infill=e.dataset.infill,_n(),Ft()):e.dataset.action&&sg(e.dataset.action,e))}function Zl(n){const e=n.target;if(e.dataset.path)wg(_e.spec,e.dataset.path,Ag(e)),ba(),Ft();else if(e.dataset.gate!=null&&e.dataset.field){const t=_e.spec.fence.gates[Number(e.dataset.gate)];if(!t)return;t[e.dataset.field]=e.dataset.field==="kind"?e.value:Ke(e.value),ba(),Ft()}else if(e.id==="project-name")_e.projectName=e.value;else if(e.id==="profile-search"){_e.query=e.value;const t=_e.query.trim().toLowerCase();for(const i of document.querySelectorAll(".profile"))i.hidden=!!t&&!i.innerText.toLowerCase().includes(t)}}function sg(n,e){n==="compact"?(_e.compact=!_e.compact,ns.classList.toggle("compact",_e.compact),e.textContent=_e.compact?"הגדל":"הקטן",Qn.resize()):n==="add-gate"?(_e.spec.fence.gates.push({kind:"gate",widthM:4,qty:1}),_n(),Ft()):n==="add-ped"?(_e.spec.fence.gates.push({kind:"ped",widthM:.9,qty:1}),_n(),Ft()):n==="remove-gate"?(_e.spec.fence.gates.splice(Number(e.dataset.index),1),_n(),Ft()):n==="share"?gg():n==="copy"?Jl():n==="download"?Ql():n==="print"?window.print():n==="save-project"?_g():n==="load-project"?Mg(e.dataset.id):n==="delete-project"?vg(e.dataset.id):n==="edit-profile"?(_e.editing=e.dataset.id,ii()):n==="close-profile"?(_e.editing=null,ii()):n==="save-profile"?Sg(e.dataset.id):n==="add-profile"?xg():n==="delete-profile"?Eg(e.dataset.id):n==="reset-catalog"&&bg()}function Ba(n){_e.screen=n,document.querySelector(".sticky").hidden=!1,ns.hidden=n!=="calc",document.getElementById("kind-switch").hidden=n!=="calc",document.getElementById("summary").hidden=n!=="calc",Ys("#kind-switch button","kind",_e.spec.kind),Ys(".tabbar button","screen",n),n==="calc"?(_n(),requestAnimationFrame(()=>Qn.resize())):n==="profiles"?ii():za(),n!=="calc"&&(document.getElementById("results").innerHTML="")}function _n(){const n=_e.spec.kind,e=lg();let t="";n==="pergola"?t=rg():n==="fence"?t=ag():t=og(),document.getElementById("form").innerHTML=t+e,Ys("#kind-switch button","kind",n),Ha()}function rg(){const n=_e.spec.pergola;return`<section class="card">
    <h2>סוג הפרגולה</h2>
    <div class="choice">
      <button type="button" data-mount="wall" aria-pressed="${n.mount==="wall"}">צמודת קיר</button>
      <button type="button" data-mount="free" aria-pressed="${n.mount==="free"}">עומדת חופשית</button>
    </div>
    <div class="choice">
      <button type="button" data-roof="slats" aria-pressed="${n.roof==="slats"}">שלבי הצללה</button>
      <button type="button" data-roof="panel" aria-pressed="${n.roof==="panel"}">פוליקרבונט / פאנל</button>
    </div>
    <div class="grid">
      ${Ze("pergola.lengthM","אורך",n.lengthM,"מ׳")}
      ${Ze("pergola.depthM","עומק / בליטה",n.depthM,"מ׳")}
      ${Ze("pergola.heightM","גובה עמוד",n.heightM,"מ׳")}
      ${n.mount==="wall"?Ze("pergola.wallHeightM","גובה קיר",n.wallHeightM,"מ׳"):""}
      ${Ze("pergola.postSpacingM","מרווח עמודים מרבי",n.postSpacingM,"מ׳")}
      ${Ze("pergola.rafterSpacingM","מרווח קורות מרבי",n.rafterSpacingM,"מ׳")}
      ${Ze("pergola.overhangMm","תוספת בליטה",n.overhangMm,"מ״מ","1")}
      ${Ze("pergola.embedMm","תוספת עיגון לעמוד",n.embedMm,"מ״מ","1")}
    </div>
    ${n.roof==="slats"?`<div class="choice">
      <button type="button" data-slat-mode="continuous" aria-pressed="${n.slatMode==="continuous"}">שלבים רצופים</button>
      <button type="button" data-slat-mode="between" aria-pressed="${n.slatMode==="between"}">בין הקורות</button>
    </div>
    <div class="grid">
      ${Ze("pergola.slatGapMm","מרווח בין שלבים",n.slatGapMm,"מ״מ","1")}
      ${Ze("pergola.slatClearanceMm","מרווח התאמה לשלב",n.slatClearanceMm,"מ״מ","1")}
    </div>`:`<div class="grid">${Ze("pergola.coverMm","רוחב כיסוי",n.coverMm,"מ״מ","1")}</div>
      <p class="note">השאירו ריק כדי לקחת את רוחב הכיסוי מהפרופיל. הלוח מונח לאורך העומק.</p>`}
    <h2>פרופילים</h2>
    ${Ot("pergola.profiles.post","עמוד",n.profiles.post,"post")}
    ${Ot("pergola.profiles.beam","קורה ראשית",n.profiles.beam,"beam")}
    ${Ot("pergola.profiles.rafter","קורת משנה",n.profiles.rafter,"rafter")}
    ${n.roof==="slats"?Ot("pergola.profiles.slat","שלב",n.profiles.slat,"slat"):`${Ot("pergola.profiles.panel","לוח",n.profiles.panel,"panel")}
         ${Ot("pergola.profiles.edge","פרופיל שפה",n.profiles.edge,"edge")}`}
  </section>`}function ag(){const n=_e.spec.fence,e=n.gates.map((t,i)=>`<div class="card" style="box-shadow:none">
      <div class="project">
        <strong>${t.kind==="ped"?"פשפש":"שער"} ${i+1}</strong>
        <button class="ghost" type="button" data-action="remove-gate" data-index="${i}">הסרה</button>
      </div>
      <div class="grid">
        <label class="field"><span>סוג</span>
          <select data-gate="${i}" data-field="kind">
            <option value="gate" ${t.kind==="gate"?"selected":""}>שער</option>
            <option value="ped" ${t.kind==="ped"?"selected":""}>פשפש</option>
          </select>
        </label>
        ${cl(i,"widthM","רוחב מפתח",t.widthM,"מ׳")}
        ${cl(i,"qty","כמות",t.qty,"","1")}
      </div>
    </div>`).join("");return`<section class="card">
    <h2>גדר שלבים אופקיים</h2>
    <p class="note">האורך הוא חוץ־חוץ וכולל את המפתחים. רוחב השער הוא מפתח נקי.</p>
    <div class="grid">
      ${Ze("fence.lengthM","אורך כולל",n.lengthM,"מ׳")}
      ${Ze("fence.heightM","גובה",n.heightM,"מ׳")}
      ${Ze("fence.postSpacingM","מרווח עמודים מרבי",n.postSpacingM,"מ׳")}
      ${Ze("fence.slatGapMm","מרווח בין שלבים",n.slatGapMm,"מ״מ","1")}
      ${Ze("fence.bottomMm","מרווח תחתון",n.bottomMm,"מ״מ","1")}
      ${Ze("fence.topMm","מרווח עליון",n.topMm,"מ״מ","1")}
      ${Ze("fence.slatClearanceMm","התאמת חיתוך",n.slatClearanceMm,"מ״מ","1")}
      ${Ze("fence.hingeGapMm","מרווח ציר כולל",n.hingeGapMm,"מ״מ","1")}
      ${Ze("fence.embedMm","תוספת עיגון",n.embedMm,"מ״מ","1")}
    </div>
    ${Ot("fence.profiles.post","עמוד",n.profiles.post,"fencePost")}
    ${Ot("fence.profiles.slat","שלב",n.profiles.slat,"fenceSlat")}
    ${Ot("fence.profiles.frame","מסגרת שער",n.profiles.frame,"gateFrame")}
    <h2>שערים ופשפשים</h2>
    ${e||'<p class="note">אין פתחים. כל האורך ייסגר בשלבים.</p>'}
    <div class="row-actions no-print">
      <button class="ghost" type="button" data-action="add-gate">הוספת שער</button>
      <button class="ghost" type="button" data-action="add-ped">הוספת פשפש</button>
    </div>
  </section>`}function og(){const n=_e.spec.railing;return`<section class="card">
    <h2>מעקה</h2>
    <p class="note">גובה נפוץ למרפסת הוא 1.05 מ׳. זו אינה בדיקת תקן.</p>
    <div class="choice">
      <button type="button" data-infill="vertical" aria-pressed="${n.infill==="vertical"}">זקפים</button>
      <button type="button" data-infill="horizontal" aria-pressed="${n.infill==="horizontal"}">שלבים</button>
      <button type="button" data-infill="none" aria-pressed="${n.infill==="none"}">בלי מילוי</button>
    </div>
    <div class="grid">
      ${Ze("railing.lengthM","אורך",n.lengthM,"מ׳")}
      ${Ze("railing.heightM","גובה",n.heightM,"מ׳")}
      ${Ze("railing.postSpacingM","מרווח עמודים מרבי",n.postSpacingM,"מ׳")}
      ${Ze("railing.gapMm","מרווח מילוי מרבי",n.gapMm,"מ״מ","1")}
      ${Ze("railing.embedMm","תוספת עיגון",n.embedMm,"מ״מ","1")}
    </div>
    ${Ot("railing.profiles.post","עמוד",n.profiles.post,"railingPost")}
    ${Ot("railing.profiles.handrail","מאחז יד",n.profiles.handrail,"handrail")}
    ${Ot("railing.profiles.bottom","מסילה תחתונה",n.profiles.bottom,"bottomRail")}
    ${n.infill==="none"?"":Ot("railing.profiles.infill","מילוי",n.profiles.infill,"railingInfill")}
  </section>`}function lg(){const n=_e.spec.cutting;return`<section class="card">
    <h2>חיתוך מוטות</h2>
    <div class="grid">
      ${Ze("cutting.kerfMm","עובי להב",n.kerfMm,"מ״מ","0.5")}
      ${Ze("cutting.allowanceMm","תוספת לכל חלק",n.allowanceMm,"מ״מ","1")}
      ${Ze("cutting.endTrimMm","קצה מוט",n.endTrimMm,"מ״מ","1")}
      ${Ze("cutting.spliceOverlapMm","חפיפת חיבור",n.spliceOverlapMm,"מ״מ","1")}
      ${Ze("cutting.preferredStockM","אורך מוט מועדף",n.preferredStockM,"מ׳")}
    </div>
    <label class="field"><span>בחירת אורך</span>
      <select data-path="cutting.stockMode">
        <option value="preferred" ${n.stockMode!=="auto"?"selected":""}>האורך המועדף, או הקרוב שאצל הפרופיל</option>
        <option value="auto" ${n.stockMode==="auto"?"selected":""}>אוטומטי — פחות מוטות ופחות פחת</option>
      </select>
    </label>
  </section>`}function cg(n){const e=document.getElementById("results");if(!(n!=null&&n.ok)){e.innerHTML=`<section class="card"><div class="bad-box">${((n==null?void 0:n.errors)||["לא ניתן לחשב"]).map(Xe).join("<br>")}</div></section>`;return}const t=n.lines.map(r=>`<tr>
      <td>${Xe(r.label)}</td>
      <td>${Xe(r.profileName)}${r.catalogNumber?`<br><span class="note">${Xe(r.catalogNumber)}</span>`:""}${r.generic?'<br><span class="badge">מידה כללית</span>':""}</td>
      <td>${r.nominalMm} מ״מ${r.cutMm!==r.nominalMm?`<br><span class="note">חיתוך ${r.cutMm}</span>`:""}</td>
      <td>${r.qty}</td>
    </tr>`).join(""),i=n.packing.map(r=>{if(r.kind==="sheet")return`<div class="bar"><strong>${Xe(r.profileName)}</strong><br>${r.barCount} לוחות ${Xe(r.stockLabel)} · ${r.pieceCount} מודולים · פחת שטח ${(r.wastePct*100).toFixed(0)}%</div>`;if(r.error)return`<div class="bar">${Xe(r.profileName)}: ${Xe(r.error)}</div>`;const a=r.bars.map(l=>`מוט ${l.index}: ${l.cuts.map(c=>c.lengthMm).join("+")} · פחת ${l.wasteMm} מ״מ`).join("<br>"),o=r.orderKg==null?"":`<br>משקל מוטות כ־${r.orderKg.toFixed(1)} ק״ג`;return`<div class="bar"><strong>${Xe(r.profileName)}</strong> ${r.catalogNumber?Xe(r.catalogNumber):""}<br>
      ${r.barCount} מוטות של ${Rg(r.stockMm)}${r.stockAssumed?" · אורך לא מהקטלוג":""} · פחת ${(r.wastePct*100).toFixed(1)}%${o}<br>${a}</div>`}).join(""),s=n.warnings.length?`<div class="warn-box">${n.warnings.map(Xe).join("<br>")}</div>`:"";e.innerHTML=`<section class="card">
      ${s}
      <h2>רשימת חיתוך</h2>
      <table><thead><tr><th>חלק</th><th>פרופיל</th><th>אורך</th><th>כמות</th></tr></thead><tbody>${t}</tbody></table>
      <h2 style="margin-top:16px">מוטות ופחת</h2>
      ${i}
      <div class="actions no-print" style="margin-top:12px">
        <button class="primary" type="button" data-action="share">שיתוף הרשימה</button>
        <button class="ghost" type="button" data-action="copy">העתקה</button>
        <button class="ghost" type="button" data-action="download">קובץ טקסט</button>
        <button class="ghost" type="button" data-action="print">הדפסה / PDF</button>
      </div>
      <label class="field" style="margin-top:12px"><span>שם לשמירה</span>
        <input id="project-name" value="${Xe(_e.projectName)}" placeholder="פרגולה לדוגמה">
      </label>
      <button class="ghost" type="button" data-action="save-project">שמירה במכשיר</button>
      <h2 style="margin-top:16px">שרטוט למידות</h2>
      <div class="draw">${Nr(n.layout)}</div>
      <div class="draw">${dl(n.layout)}</div>
      <details style="margin-top:12px"><summary>הנחות החישוב</summary>
        <p class="note">${n.assumptions.map(Xe).join("<br>")}</p>
      </details>
    </section>`}function ii(){document.getElementById("form").innerHTML=`<section class="card">
      <h2>קטלוג פרופילים</h2>
      <p class="note">המק״טים המאומתים נשמרים עם המקור. מידה בלי מק״ט מסומנת. אפשר לערוך, והשינוי נשמר במכשיר.</p>
      <input class="search" id="profile-search" value="${Xe(_e.query)}" placeholder="חיפוש לפי שם או מק״ט">
      <div class="row-actions">
        <button class="ghost" type="button" data-action="add-profile">פרופיל חדש</button>
        <button class="ghost" type="button" data-action="reset-catalog">שחזור קטלוג</button>
      </div>
      ${Fn.filter(Tg).map(hg).join("")||'<p class="note">אין פרופילים תואמים.</p>'}
    </section>`,document.getElementById("results").innerHTML=""}function hg(n){const e=_e.editing===n.id,t=[n.catalogNumber||"בלי מק״ט",n.generic?"מידה כללית":"",n.kind==="sheet"?"לוח":`${n.aMm||"?"}×${n.bMm||"?"}`].filter(Boolean).join(" · ");return`<article class="profile">
    <header>
      <div><h3>${Xe(n.name)}</h3><p class="note">${Xe(t)}</p></div>
      <button class="ghost" type="button" data-action="${e?"close-profile":"edit-profile"}" data-id="${Xe(n.id)}">${e?"סגירה":"עריכה"}</button>
    </header>
    <p class="note">${Xe(n.source||"")}</p>
    ${n.notes?`<p class="note">${Xe(n.notes)}</p>`:""}
    ${e?ug(n):""}
  </article>`}function ug(n){const e=eg.map(([t,i])=>`<label><input type="checkbox" data-role="${t}" ${(n.roles||[]).includes(t)?"checked":""}> ${i}</label>`).join("");return`<div class="grid" data-editor="${Xe(n.id)}">
      ${Yt("name","שם",n.name)}
      ${Yt("catalogNumber","מק״ט",n.catalogNumber||"")}
      ${Yt("source","מקור",n.source||"")}
      ${Yt("aMm","מידה א׳ מ״מ",n.aMm??"")}
      ${Yt("bMm","מידה ב׳ מ״מ",n.bMm??"")}
      ${Yt("thicknessMm","עובי",n.thicknessMm??"")}
      ${Yt("kgPerM","ק״ג למטר",n.kgPerM??"")}
      ${Yt("stock","אורכי מוט במטר",(n.stockLengthsM||[]).join(", "))}
      ${n.kind==="sheet"||(n.roles||[]).includes("panel")?`${Yt("sheetWidthMm","רוחב לוח",n.sheetWidthMm||"")}
        ${Yt("sheetLengthMm","אורך לוח",n.sheetLengthMm||"")}
        ${Yt("coverWidthMm","רוחב כיסוי",n.coverWidthMm||"")}`:""}
    </div>
    <label class="field"><input type="checkbox" data-generic ${n.generic?"checked":""}> מידה כללית, בלי מק״ט מאומת</label>
    <div class="checks">${e}</div>
    <label class="field"><span>הערה</span><input data-edit="notes" value="${Xe(n.notes||"")}"></label>
    <div class="row-actions">
      <button class="primary" type="button" data-action="save-profile" data-id="${Xe(n.id)}">שמירת פרופיל</button>
      <button class="ghost" type="button" data-action="delete-profile" data-id="${Xe(n.id)}">מחיקה מהרשימה</button>
    </div>`}function za(){const n=on().projects||[];document.getElementById("form").innerHTML=`<section class="card">
      <h2>פרויקטים במכשיר</h2>
      <p class="note">השמירה מקומית בדפדפן. אין חשבון ואין שרת.</p>
      ${n.length?n.map(e=>`<div class="project">
          <div><strong>${Xe(e.name)}</strong><br><span class="note">${new Date(e.savedAt).toLocaleDateString("he-IL")}</span></div>
          <div class="row-actions">
            <button class="ghost" type="button" data-action="load-project" data-id="${Xe(e.id)}">פתיחה</button>
            <button class="ghost" type="button" data-action="delete-project" data-id="${Xe(e.id)}">מחיקה</button>
          </div>
        </div>`).join(""):'<p class="note">עדיין אין פרויקטים שמורים.</p>'}
    </section>`}function Ft(){cancelAnimationFrame(ll),ll=requestAnimationFrame(dg)}function dg(){const n=fg();_e.result=n;const e=document.getElementById("summary");if(!n.ok)e.className="summary warn",e.textContent=n.errors[0]||"בדקו את המידות",Qn.setLayout(null),document.getElementById("svg-slot").innerHTML=Nr(null);else{e.className="summary",e.textContent=mg(n),Qn.setLayout(n.layout);const t=_e.preview==="elev"?dl(n.layout):Nr(n.layout);document.getElementById("svg-slot").innerHTML=t}Ha(),_e.screen==="calc"&&cg(n),Qn.resize()}function fg(){try{return cc(pg())}catch{return{ok:!1,errors:["שגיאה בחישוב"],warnings:[],assumptions:[],layout:null,lines:[],packing:[],summary:{}}}}function pg(){const n=_e.spec.cutting,e={cutting:{kerfMm:Ke(n.kerfMm),allowanceMm:Ke(n.allowanceMm),endTrimMm:Ke(n.endTrimMm),spliceOverlapMm:Ke(n.spliceOverlapMm),stockMode:n.stockMode,preferredStockMm:Math.round(Ke(n.preferredStockM)*1e3)||6e3,defaultStockMm:6e3}};if(_e.spec.kind==="pergola"){const i=_e.spec.pergola;return{...e,kind:"pergola",mount:i.mount,roof:i.roof,slatMode:i.slatMode,lengthMm:Nt(i.lengthM),depthMm:Nt(i.depthM),heightMm:Nt(i.heightM),wallHeightMm:Nt(i.wallHeightM),postSpacingMm:Nt(i.postSpacingM),rafterSpacingMm:Nt(i.rafterSpacingM),overhangMm:Ke(i.overhangMm),slatGapMm:Ke(i.slatGapMm),slatClearanceMm:Ke(i.slatClearanceMm),embedMm:Ke(i.embedMm),coverMm:i.coverMm===""?0:Ke(i.coverMm),profiles:{post:It(i.profiles.post),beam:It(i.profiles.beam),rafter:It(i.profiles.rafter),slat:It(i.profiles.slat),edge:It(i.profiles.edge),panel:It(i.profiles.panel)}}}if(_e.spec.kind==="fence"){const i=_e.spec.fence;return{...e,kind:"fence",lengthMm:Nt(i.lengthM),heightMm:Nt(i.heightM),postSpacingMm:Nt(i.postSpacingM),slatGapMm:Ke(i.slatGapMm),bottomMm:Ke(i.bottomMm),topMm:Ke(i.topMm),slatClearanceMm:Ke(i.slatClearanceMm),hingeGapMm:Ke(i.hingeGapMm),embedMm:Ke(i.embedMm),gates:i.gates.map(s=>({kind:s.kind,widthMm:Nt(s.widthM),qty:Ke(s.qty)})),profiles:{post:It(i.profiles.post),slat:It(i.profiles.slat),frame:It(i.profiles.frame)}}}const t=_e.spec.railing;return{...e,kind:"railing",lengthMm:Nt(t.lengthM),heightMm:Nt(t.heightM),postSpacingMm:Nt(t.postSpacingM),infill:t.infill,gapMm:Ke(t.gapMm),slatClearanceMm:Ke(t.slatClearanceMm),embedMm:Ke(t.embedMm),profiles:{post:It(t.profiles.post),handrail:It(t.profiles.handrail),bottom:It(t.profiles.bottom),infill:It(t.profiles.infill)}}}function It(n){const e=Fn.find(t=>t.id===n);return e?{...e,stockLengthsMm:(e.stockLengthsM||[]).map(t=>Math.round(Number(t)*1e3))}:null}function mg(n){var i;const e=(...s)=>n.lines.filter(r=>s.includes(r.label)).reduce((r,a)=>r+a.qty,0),t=[];if(_e.spec.kind==="pergola")t.push(`${e("עמוד")} עמודים`),t.push(`${e("קורת קיר","קורה קדמית","קורה אורכית","קורה רוחבית")} קורות`),t.push(`${e("קורת משנה")} קורות משנה`),_e.spec.pergola.roof==="slats"?t.push(`${e("שלב הצללה")} שלבים`):t.push(`${((i=n.packing.find(s=>s.kind==="sheet"))==null?void 0:i.barCount)||0} לוחות`);else if(_e.spec.kind==="fence"){t.push(`${e("עמוד גדר","עמוד מזוזה")} עמודים`),t.push(`${e("שלב גדר")} שלבים`);const s=e("ניצב שער")/2+e("ניצב פשפש")/2;s&&t.push(s===1?"פתח אחד":`${s} פתחים`)}else t.push(`${e("עמוד מעקה")} עמודים`),t.push(`${e("זקף")||e("מילוי אופקי")} מילוי`);return t.push(`${n.summary.barCount} מוטות`),t.join(" · ")}function Va(){const n={pergola:"פרגולה",fence:"גדר שלבים",railing:"מעקה"};return Jm(_e.result,{title:`כמויות אלומיניום — ${n[_e.spec.kind]}`,subtitle:_e.projectName||""})}async function gg(){const n=Va();if(navigator.share)try{await navigator.share({title:"רשימת חיתוך",text:n});return}catch(e){if((e==null?void 0:e.name)==="AbortError")return}await Jl()}async function Jl(){const n=Va();try{await navigator.clipboard.writeText(n),On("הרשימה הועתקה")}catch{Ql()}}function Ql(){const n=new Blob([Va()],{type:"text/plain;charset=utf-8"}),e=document.createElement("a");e.href=URL.createObjectURL(n),e.download="reshimat-chituch.txt",e.click(),URL.revokeObjectURL(e.href),On("קובץ הטקסט ירד")}function _g(){const n=on(),e=n.projects||[],t=_e.projectName.trim()||Cg();_e.projectName=t,e.unshift({id:crypto.randomUUID(),name:t,savedAt:Date.now(),spec:_e.spec}),n.projects=e.slice(0,40),n.draft=_e.spec,ai(n),On("הפרויקט נשמר במכשיר"),_e.screen==="projects"&&za()}function Mg(n){const e=(on().projects||[]).find(t=>t.id===n);e&&(_e.spec=e.spec,_e.projectName=e.name,Ba("calc"),Ft(),On("הפרויקט נפתח"))}function vg(n){const e=on();e.projects=(e.projects||[]).filter(t=>t.id!==n),ai(e),za()}function xg(){const n=`custom-${Date.now()}`,e={id:n,name:"פרופיל חדש",catalogNumber:null,source:"הוזן ידנית",generic:!0,skuVerified:!1,dimsVerified:!1,stockVerified:!1,roles:["beam"],kind:"linear",aMm:40,bMm:100,thicknessMm:null,kgPerM:null,stockLengthsM:[6],builtin:!1,notes:""},t=on();t.profiles=t.profiles||{},t.profiles.custom=t.profiles.custom||[],t.profiles.custom.unshift(e),ai(t),Fn=us(is,t),_e.editing=n,ii()}function Sg(n){var c;const e=document.querySelector(`[data-editor="${CSS.escape(n)}"]`);if(!e)return;const t=h=>{var d;return((d=e.querySelector(`[data-edit="${h}"]`))==null?void 0:d.value)??""},i=[...document.querySelectorAll("[data-role]:checked")].map(h=>h.dataset.role),s=t("stock").split(/[, ]+/).map(Number).filter(h=>h>0),r={name:t("name")||"פרופיל",catalogNumber:t("catalogNumber")||null,source:t("source"),aMm:t("aMm")===""?null:Ke(t("aMm")),bMm:t("bMm")===""?null:Ke(t("bMm")),thicknessMm:t("thicknessMm")===""?null:Ke(t("thicknessMm")),kgPerM:t("kgPerM")===""?null:Ke(t("kgPerM")),stockLengthsM:s,stockVerified:!1,generic:!!((c=document.querySelector("[data-generic]"))!=null&&c.checked),skuVerified:!!t("catalogNumber"),roles:i.length?i:["beam"],notes:t("notes"),sheetWidthMm:Ke(t("sheetWidthMm"))||void 0,sheetLengthMm:Ke(t("sheetLengthMm"))||void 0,coverWidthMm:Ke(t("coverWidthMm"))||void 0};r.sheetWidthMm&&(r.kind="sheet");const a=on();a.profiles=a.profiles||{};const o=a.profiles.custom||[],l=o.findIndex(h=>h.id===n);l>=0?o[l]={...o[l],...r}:(a.profiles.overrides=a.profiles.overrides||{},a.profiles.overrides[n]=r),a.profiles.custom=o,ai(a),Fn=us(is,a),_e.editing=null,ii(),On("הפרופיל נשמר")}function Eg(n){const e=on();e.profiles=e.profiles||{};const t=e.profiles.custom||[];t.some(i=>i.id===n)?e.profiles.custom=t.filter(i=>i.id!==n):e.profiles.hidden=[...new Set([...e.profiles.hidden||[],n])],ai(e),Fn=us(is,e),_e.editing=null,ii()}function bg(){const n=on();n.profiles={overrides:{},custom:[],hidden:[]},ai(n),Fn=us(is,n),_e.editing=null,ii(),On("הקטלוג שוחזר")}function ba(){const n=on();n.draft=_e.spec,ai(n)}function Ha(){ns.dataset.mode=_e.preview,Ys(".modes button","preview",_e.preview),ns.classList.toggle("compact",_e.compact)}function Ys(n,e,t){for(const i of document.querySelectorAll(n))i.setAttribute("aria-pressed",String(i.dataset[e]===t)),e==="screen"&&i.dataset.screen===t?i.setAttribute("aria-current","page"):e==="screen"&&i.removeAttribute("aria-current")}function Ze(n,e,t,i,s="0.01"){return`<label class="field"><span>${e}</span><input data-path="${n}" inputmode="decimal" step="${s}" value="${Xe(t)}" aria-label="${Xe(e)}"><em class="note">${i}</em></label>`}function cl(n,e,t,i,s,r="0.01"){return`<label class="field"><span>${t}</span><input data-gate="${n}" data-field="${e}" inputmode="decimal" step="${r}" value="${Xe(i)}"><em class="note">${s}</em></label>`}function Ot(n,e,t,i){const s=Fn.filter(a=>(a.roles||[]).includes(i));if(t&&!s.some(a=>a.id===t)){const a=Fn.find(o=>o.id===t);a&&s.unshift(a)}const r=s.map(a=>`<option value="${Xe(a.id)}" ${a.id===t?"selected":""}>${Xe(yg(a))}</option>`).join("");return`<label class="field"><span>${e}</span><select data-path="${n}">${r||'<option value="">אין פרופיל</option>'}</select></label>`}function Yt(n,e,t){return`<label class="field"><span>${e}</span><input data-edit="${n}" value="${Xe(t)}"></label>`}function yg(n){const e=[n.name];return n.catalogNumber?e.push(n.catalogNumber):n.generic?e.push("כללי"):n.skuVerified===!1&&e.push("בלי מק״ט"),e.join(" · ")}function Tg(n){return`${n.name} ${n.catalogNumber||""} ${n.source||""}`.toLowerCase().includes(_e.query.trim().toLowerCase())}function wg(n,e,t){const i=e.split(".");let s=n;for(let r=0;r<i.length-1;r+=1)s=s[i[r]];s[i.at(-1)]=t}function Ag(n){return n.tagName==="SELECT"?n.value:Ke(n.value)}function Ke(n){const e=parseFloat(String(n??"").replace(",","."));return Number.isFinite(e)?e:0}function Nt(n){return Math.round(Ke(n)*1e3)}function Rg(n){return`${(n/1e3).toFixed(2)} מ׳`}function Xe(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Cg(){return`${{pergola:"פרגולה",fence:"גדר",railing:"מעקה"}[_e.spec.kind]} ${new Date().toLocaleDateString("he-IL")}`}function On(n){const e=document.getElementById("toast");e.textContent=n,e.classList.add("show"),clearTimeout(On.timer),On.timer=setTimeout(()=>e.classList.remove("show"),2200)}function Pg(){const n=document.getElementById("net"),e=()=>{n.textContent=navigator.onLine?"כמויות בלבד":"בלי רשת"};window.addEventListener("online",e),window.addEventListener("offline",e),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js",{scope:"./"}).then(()=>{n.textContent=navigator.onLine?"זמין גם בלי רשת":"בלי רשת"}).catch(()=>{})}
