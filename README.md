## Memo-useMemo-useCallback-useRef
Öncelikle şunu belirteyim, memoization kullandığımız programlama diline ait bir yapı değil, bir optimizasyon tekniği. Yani ben örneklerimi JavaScript ile yazacak olsam da siz bu tekniği istediğiniz dilde kullanabilirsiniz.

Özetle memoization pahalı işlemler yapan fonksiyonlarımızda sonuçları cacheleyerek aynı inputu tekrar verdiğimizde aynı pahalı işlemi tekrar yapmadan cacheten çağırarak bize daha iyi performans sağlayan bir yöntem. Tabi burada gözardı edilmemesi gereken bir diğer husus da bu sonuçları depolamanın da bir maliyeti var. Burada iyi düşünüp, hesap edip doğru kararı kendimize göre vermeliyiz. Buradaki pahalı fonksiyonları biraz daha anlaşılır hale getirmek istersek yoğun hesaplamalar yapan veya recursive çalışan fonksiyonlar olarak düşünebiliriz. Günümüz koşullarında performansı harcadığımız zaman ve tükettiğimiz bellek üzerinden değerlendirirsek aslında memoization bize bunları minimum seviyede kullanma imkanı veriyor.

## React Memo
Eğer bir component React.memo ile çağrılırsa, React bu component’i render eder ve bu component’e gönderilen props değerlerini saklar/kaydeder (memoized). Bir sonraki render durumunda bu component’e gönderilen props değerleri, bir önceki render edildiğindeki props değerleri ile aynıysa component tekrar render edilmez.
React.memo, React bileşenlerinin performansını artırmak için kullanılan bir optimizasyon teknolojisidir. Bu yöntem, aynı girdilerle yeniden renderelemeyi önlemek için bir bileşeni önbelleğe alır. Ve genellikle kullanmakta bir sakınca yoktur. Ancak, bazı durumlarda, gereksiz yere React.memo kullanmak uygulamanın boyutunu artırabilir ve performansını olumsuz yönde etkileyebilir.

React.memo'nun kullanılması, özellikle büyük ve karmaşık uygulamalarda, uygun bir şekilde yönetilmediğinde, gereksiz yere bellek kullanımına neden olabilir. Bu nedenle, uygulama ölçeğine bağlı olarak React.memo kullanımının dikkatli bir şekilde planlanması ve yönetilmesi önemlidir.


 React.memo’yu kullanmanın birkaç farklı yolu bulunmaktadır:

```
1.yol
import React from 'react';

const Header = React.memo((props) => {
    console.log("Render => HeaderMemo Components")
  return (
    <div className='bg-danger text-center'>HeaderMemo Componenti : {count}</div>
  )
})

export default Header;

2.yol 
import React,{memo} from 'react'

const HeaderMemo = ({count}) => {
  console.log("Render => HeaderMemo Components")
  return (
    <div className='bg-danger text-center'>HeaderMemo Componenti : {count}</div>
  )
}

export default memo(HeaderMemo)


Count değerini değiştirdiğimiz zaman App component’i tekrar render edilmesine rağmen, içerisinde bulunan Header component’i tekrar render edilmedi. Bunun sebebi de yukarıda belirttiğim gibi, eğer component’e gönderilen props değerleri component render edildiği zaman bir önceki props değerleri ile aynıysa component’in render edilmesi pas geçilir. Böylelikle Header component’ine gönderilen props değerleri değişene kadar tekrar render edilmez.
```

## UseRef Hook Nedir?
UseRef Hook, React fonksiyonel bileşenlerindeki mutable değişkenlerin (state) korunmasına ve yönetilmesine olanak tanıyan bir kancadır. UseRef Hook, bir değişkenin ömrü boyunca sabit kalmasını sağlayarak değişkenin herhangi bir güncellemesi yapılırken bile bileşenin yeniden render edilmesini önler.

UseRef Hook Nasıl Kullanılır?
UseRef Hook, useRef() fonksiyonu kullanılarak oluşturulur ve ardından döndürülen referans bir değişkende depolanır. Bu referans, sonraki render çağrıları sırasında aynı öğeyi işaret eder.

```javascript
Copy code
import React, { useRef } from 'react';

function Example() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Odaklan</button>
    </div>
  );
}
```
Yukarıdaki örnekte, bir inputRef adlı bir değişken oluşturuyoruz ve bu değişkeni <input> öğesine bir referans olarak aktarıyoruz. Daha sonra handleClick fonksiyonunda, inputRef.current kullanılarak giriş öğesine odaklanılıyor.

UseRef Hook Kullanım Alanları
UseRef Hook, bazı durumlarda özellikle yararlıdır:

Öğe odaklanma: Yukarıdaki örnekte olduğu gibi, UseRef Hook'un en yaygın kullanım alanı, bir öğeyi odaklamak ve yönetmektir.
Animasyonlar: Animasyonlar gibi performans açısından yoğun işlemler, UseRef Hook kullanarak React fonksiyonel bileşenlerinin yeniden render edilmesini önleyebilir.
Veri kaydetme: UseRef Hook, bir fonksiyonel bileşen içindeki verilerin önbelleğe alınmasına ve gerektiğinde erişilmesine olanak tanır.

- useRef hook’u ile;

DOM node’larına veya React elementlerine erişebiliriz.
Mutable değişkenler tutabiliriz.
Vanilla Javascript ile yazılmış kütüphaneleri React’a uyarlarken faydalanabiliriz.
useRef hook’u kullanırken bunları dikkat etmeliyiz;

useRef ile oluşturulan bir ref sadece component oluştuğunda (onMount) oluşturulur ve tüm lifecycle’ı boyunca korunur.
Bir ref’i güncellemek “side effect” oluşturacağı için sadece useEffect, useLayoutEffect veya bir event handler içerisinde güncellenmelidir.
#### UseRef Hook ile UseState Hook Arasındaki Fark
UseRef Hook ve UseState Hook, React'ta durum yönetimi için iki farklı kancadır. UseState Hook, bileşenlerin durumunu yönetmek için kullanılırken, UseRef Hook, mutable değişkenlerin saklanması için kullanılır. UseState Hook, state değişikliklerine tepki vererek bileşenleri yeniden render ederken, UseRef Hook, bileşenlerin yeniden render edilmesini önleyerek performansı artırır.

Sonuç
UseRef Hook, React fonksiyonel bileşenlerinde mutable değişkenlerin saklanması ve yönetilmesi için kullanılan yararlı bir kancadır. UseRef Hook, özellikle öğe odaklama, animasyonlar ve veri kaydetme gibi durumlarda yararlıdır. UseRef Hook, UseState Hook ile karıştırılmamalıdır, çünkü ikisi farklı amaçlar için tasarlanmıştır.

Bir değişken değiştiğinde useState component’in tekrar render olmasını tetikler useRef component’in tekrar render olmasını tetiklemez.


## useMemo Hook Nedir?
useMemo Hook, React fonksiyonel bileşenlerinde performans optimizasyonu sağlamak için kullanılan bir kancadır. useMemo Hook, hesaplama maliyeti yüksek olan fonksiyonların sonuçlarını önbelleğe alır ve aynı girdilerle yeniden çağrıldığında önbelleğe alınmış sonuçları döndürür.

- useMemo Hook Nasıl Kullanılır?

useMemo Hook, useMemo() fonksiyonu kullanılarak oluşturulur ve hesaplanacak değeri hesaplamak için bir işlev alır. Daha sonra, önbelleğe alınacak girdileri belirtmek için bir dizi bağımlılık (dependency) sağlanabilir. Eğer bağımlılıklar değişmezse, önbelleğe alınmış sonuç tekrar kullanılır.

```javascript
import React, { useMemo } from 'react';

function Example() {
  ...
  const filteredData = useMemo(() => {
    console.log("useMemo çalıştı");
    return data?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  return <div>...</div>;
}
```
Yukarıdaki örnekte, data ve search adlı değişkenler girdi olarak veriliyor ve bir array döndürlüyor. useMemo() kullanarak hesaplama(filtreleme) önbelleğe alınır ve sadece data veya seacrh bağımlılığı değiştiğinde hesaplama yeniden yapılır.

- useMemo Hook Kullanım Alanları

useMemo Hook, özellikle aşağıdaki durumlarda yararlıdır:

Hesaplama maliyeti yüksek olan işlemler: Örneğin, büyük bir veri kümesinde filtreleme veya sıralama yapmak gibi maliyetli hesaplamalar.
Karmaşık hesaplamalar: Örneğin, bir matematiksel işlevin sonucunu hesaplamak gibi karmaşık hesaplamalar.

- Sonuç

useMemo Hook, hesaplama maliyeti yüksek olan fonksiyonların sonuçlarını önbelleğe alarak React fonksiyonel bileşenler içinde performans optimizasyonu sağlar. useMemo Hook, bir işlevi önbelleğe alır ve aynı girdilerle tekrar çağrıldığında önbelleğe alınmış sonucu döndürür. useMemo Hook, özellikle hesaplama maliyeti yüksek olan işlemler veya karmaşık hesaplamalar için yararlıdır. useCallback Hook ile karıştırılmamalıdır, çünkü useCallback Hook, bir işlevi önbelleğe alır ve aynı işlevi tekrar çağrıldığında önbelleğe alınmış işlevi döndürür.

Input alanına bir değer girdiğimiz zaman seacrh state i güncelleniyor bundan dolayı App.js tekrar render edildiği için filteredData tekrar oluşur. filteredData tekrardan oluştuğu için Card componentine göndermiş olduğumuz data her seferinde farklı bir adrese sahip olur. Bu yüzdende React.memo Card componentine ilk seferde göndermiş olduğumuz data array’inin tutulduğu adres ile render edildikten sonra gelen data array’inin farklı adreste bulunduğunu gördüğü için CArd componentini tekrar render eder. Props olarak verdiğimiz array değişmediği halde Card componentinin render edilmesini engelleyebilmek için useMemo kullanıyoruz.


- useMemo Ne Zaman Kullanılmalı?

useMemo ile fonksiyonlardan dönen değerler memoized edilir. Genellikle expensive dediğimiz durumlarda kullanılır. Örneğin fonksiyon çağrıldığı zaman çok fazla memory tüketen bir durumu düşünebilirsiniz. Çağırdığınız zaman fazla memory kullanımında bulunan bir fonksiyonunuz varsa, useMemo kullanabilirsiniz.


## useCallback Hook Nedir?
useCallback Hook, React'ta performans optimizasyonu sağlamak için kullanılan bir kancadır. useCallback Hook, bir işlevi önbelleğe alır ve aynı referansla tekrar çağrıldığında önbelleğe alınmış işlevi döndürür. Bu, gereksiz yere yeniden render etmenin önüne geçer ve performansı arttırır.

useCallback Hook Nasıl Kullanılır?
useCallback Hook, useCallback() fonksiyonu kullanılarak oluşturulur ve önbelleğe alınacak işlevi içeren bir fonksiyon alır. Daha sonra, önbelleğe alınacak girdileri belirtmek için bir dizi bağımlılık (dependency) sağlanabilir. Eğer bağımlılıklar değişmezse, önbelleğe alınmış işlev tekrar kullanılır.


```javascript
Copy code
import React, { useCallback } from 'react';

function Example({ onClick }) {

  const handleClear = useCallback(() => {
    setText("");
    setSearch("");
  }, []);

  return ....;
}
```
Yukarıdaki örnekte, handleClear adlı bir işlev önbelleğe alınıyor. useCallback() kullanarak işlev önbelleğe alınır ve dependency boş olduğu için sadece başlangıçta oluşturulur ve yeri sabit kalır.

App.js te eyr alana örneğimizde input alanına girdiğimiz her bir karakter sonucunda App.js render edildiği için ClearButton component’i de tekrar render edilmektedir. Bunun sebebi ClearButton componentimize props olarak göndermiş olduğumuz handleClear fonksiyonu, App.js tekrar render edildiği için tekrar oluşmaktadır. JavaScript’te fonksiyonlarda Object tipindedir. useMemoda belirttiğim gibi, Object tipinde gönderilen props’larda React.memo referans karşılaştırması yaptığı için bir önceki render edildiğinde gönderilen memory adresi ile bir sonraki renderda gönderilen adres değerleri farklı olduğu için ClearButton componenti tekrar render edilir.
useCallback ile bir fonksiyonu memoized edebiliriz. Memoized edilen bu fonksiyon sadece bağımlı olduğu değerlerin (dependency list) değişmesi durumunda tekrardan oluşturulur.

- useCallback Hook Kullanım Alanları

useCallback Hook, özellikle aşağıdaki durumlarda yararlıdır:

Çocuk bileşenlere geçirilen işlevler: useCallback Hook, bir işlevin sürekli olarak yeniden oluşturulmasını önler ve gereksiz renderlemeyi engeller.
Bağımlılıkları değişmeyen işlevler: useCallback Hook, bağımlılıkları değişmeyen işlevleri önbelleğe alarak gereksiz renderlemeyi engeller.

Sonuç
useCallback Hook, bir işlevi önbelleğe alarak aynı işlevi tekrar çağrıldığında önbelleğe alınmış işlevi döndürerek React uygulamalarındaki performansı arttırır. useCallback Hook, özellikle çocuk bileşenlere geçirilen işlevler ve bağımlılıkları değişmeyen işlevler için yararlıdır. useMemo Hook ile useCallback Hook arasındaki farkı anlamak da önemlidir, çünkü bu iki kancanın farklı kullanım alanları vardır.

useCallback
Returns a memoized callback.

#### useMemo Hook ile useCallback Hook Arasındaki Fark

useMemo Hook ve useCallback Hook, React'ta performans optimizasyonu için iki farklı kancadır. useMemo hooku useCallback ile çok benzer olup tek farkı geriye memoized bir fonksiyon değil o fonksiyonun döndürdüğü değerleri döndürür.

Evet gerçekten de yaptığı tam olarak bu. useCallback parametre olarak bir fonksiyon ve dependency array alıyor ve dependency array içerisindeki değerler değişmediği sürece parametre olarak aldığı fonksiyonu return ediyor.
Fakat bunu yapması bizim ne işimize yarıyor gelin önce ona bakalım. JavaScript’te fonksiyonlar first-class citizen olarak geçer yani her fonksiyon aslında bir nesnedir. Dolayısıyla birebir aynı fonksiyonları birbirine eşitliğini kontrol ettiğimizde de alacağımız sonuç false olur.

useCallback Hook, bir işlevi önbelleğe alır ve aynı referansla tekrar çağrıldığında önbelleğe alınmış işlevi döndürür. 
useMemo Hook ise hesaplamaları önbelleğe alır ve sonuçları döndürür. useCallback Hook, özellikle bir işlevin çocuk bileşenlere geçirilmesi gerektiğinde yararlıdır, useMemo Hook ise hesaplama maliyeti yüksek olan değerlerin saklanması için kullanılır.



- react memo, usememo, usecallback,useref bunları ne zaman kullanmamalıyım

Aşağıdaki durumlarda, ilgili React hook'larını kullanmamak daha uygun olabilir:

React.memo: Bileşenin yeniden render edilmesi çok ucuzsa ve performans sorunları beklemiyorsanız, özellikle bileşen çok basitse, React.memo kullanmanız gerekli olmayabilir.
useMemo: İşlem maliyeti düşük olan ve yalnızca birkaç kez hesaplanması gereken işlemler için, özellikle uygulamanız küçükse ve performans sorunları beklemiyorsanız useMemo kullanmanız gerekli olmayabilir. Ayrıca, hafıza kullanımı için de dikkatli olmanız gerekir, çünkü useMemo bellekteki bir değeri önbelleğe alır ve gereksiz yere çok fazla bellek kullanımına neden olabilir.
useCallback: Bir işlevin her çağrısında yeni bir işlev referansı oluşturmanız gerekiyorsa ve performans sorunları beklemiyorsanız useCallback kullanmanız gerekli olmayabilir. Ayrıca, useCallback kullanmanın işlevin karmaşıklığını artırabileceğini ve kodun okunabilirliğini azaltabileceğini de unutmayın.
useRef: Ref nesneleri genellikle, bir öğenin iç durumunu doğrudan değiştirmek veya elde etmek gibi durumlarda kullanılır. Ancak, örneğin, DOM düğümlerine erişmek yerine, bileşenlerin doğrudan işlevler aracılığıyla erişilebilen prop'lara veya durumlarına dayandığı durumlarda useRef kullanmanız gerekli olmayabilir.


###### React'in useCallback Hook'unu React'in useMemo Hook'u ile karıştırmayalım. useCallback, işlevleri hafızaya almak için kullanılırken, useMemo, değerleri hafızaya almak için kullanılır.

###### React'in useCallback Hook'unu React'in memo API'si ile karıştırmayalım. useCallback, işlevleri not almak için kullanılırken, React memo, yeniden oluşturmaları önlemek için React bileşenlerini sarmak için kullanılır.

###### React'in useRef Hook'unu React'in useState hooku ile karıştırmayalım. useRef, component’in tekrar render olmasını tetiklemez, useState, bir değişken değiştiğinde useState component’in tekrar render olmasını tetikler.