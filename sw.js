const CACHE="kamuyot-1795092533999";
const ASSETS=["./","./.nojekyll","./apple-touch-icon.png","./assets/NotoSansHebrew-Bold-Dz29mIJN.ttf","./assets/NotoSansHebrew-Regular-CEsPDsyu.ttf","./assets/index-DYttQZSB.js","./assets/style-C9SRruK6.css","./icon-192.png","./icon-512.png","./index.html","./manifest.webmanifest"];
self.addEventListener("install",(event)=>{
  event.waitUntil(caches.open(CACHE).then((cache)=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",(event)=>{
  event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.filter((key)=>key!==CACHE).map((key)=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",(event)=>{
  const request=event.request;
  if(request.method!=="GET") return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin) return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const cached=await cache.match(request,{ignoreSearch:true});
    if(cached) return cached;
    try{
      const response=await fetch(request);
      if(response.ok) cache.put(request,response.clone());
      return response;
    }catch(error){
      if(request.mode==="navigate"){
        const home=await cache.match(new URL("./index.html", self.location.href), {ignoreSearch:true})
          || await cache.match(new URL("./", self.location.href), {ignoreSearch:true});
        if(home) return home;
      }
      throw error;
    }
  })());
});
