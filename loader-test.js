// سكريبت اختبار اللودنج لجميع الصفحات
// يمكن إضافته لأي صفحة لاختبار اللودنج

function testLoader() {
  console.log('🧪 بدء اختبار اللودنج...');
  
  const loader = document.getElementById('global-loader');
  if (!loader) {
    console.error('❌ لم يتم العثور على عنصر اللودنج');
    return false;
  }
  
  console.log('✅ تم العثور على عنصر اللودنج');
  
  // اختبار إظهار اللودنج
  loader.style.display = 'flex';
  loader.style.opacity = '1';
  console.log('✅ تم إظهار اللودنج');
  
  // اختبار إخفاء اللودنج
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      console.log('✅ تم إخفاء اللودنج بنجاح');
    }, 400);
  }, 2000);
  
  return true;
}

// اختبار اللودنج عند تحميل الصفحة
window.addEventListener('load', function() {
  console.log('📄 تم تحميل الصفحة، جاري اختبار اللودنج...');
  
  // انتظار قليل ثم اختبار اللودنج
  setTimeout(() => {
    testLoader();
  }, 1000);
});

// إضافة زر اختبار للودنج في وحدة التحكم
console.log('🔧 لاختبار اللودنج يدوياً، اكتب: testLoader()'); 