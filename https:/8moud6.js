
$(`<style>
.management-team {
  border-radius: 10px;
  padding: 15px;
  margin-top: 5px;
  border: 2px solid #b93068;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
}
.management-team h3 {
  color: #b93068;
  font-family: 'El Messiri', 'jazeera', 'Changa', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
}
.management-team hr {
  border-color: #b93068;
  margin: 10px 0;
}
.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;
}
.member {
  text-align: center;
}
.member img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #b93068;
  box-shadow: 0 0 8px rgba(185,48,104,0.5);
}
.member b {
  color: #78939C;
  font-family: 'El Messiri', 'jazeera', sans-serif;
  font-size: 14px;
  display: block;
  margin-top: 5px;
}
.member span {
  color: #BF1D6E;
  font-family: 'El Messiri', 'jazeera', sans-serif;
  font-size: 13px;
}
.team-contact {
  color: #555;
  font-family: 'El Messiri', 'jazeera', sans-serif;
  font-size: 13px;
  margin-top: 10px;
  text-align: center;
}
.btn-management {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 6px 10px;
  font-family: 'El Messiri', 'jazeera', 'Changa', sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  background-color: #888;
  background-image: none;
  border: 2px solid #8F0000;
  border-radius: 2px 9px 9px 9px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 5px rgba(0,0,0,0.2);
  color: #fff;
}
.btn-management:hover {
  background-color: #666;
  transform: scale(0.98);
  color: #fffc76;
}
.collapse {
  display: none;
}
.collapse.show {
  display: block;
}
</style>`).appendTo('body');

$(`<button class='btn-management' type='button' id='managementBtn'>⬇ فريــــق الإدارة ⬇</button>`).insertBefore('.nav-tabs');

$(`<div class='management-team' id='managementTeam' style='display:none'>
  <center>
    <h3> فريــــق الإدارة </h3>
    <hr>
    <div class='team-members'>
      <div class='member'>
        <img src='https://up6.cc/2026/09/178845006693711.png'>
        <b>ادارة الموقع</b>
        <span>فطــيم- اكتفيت </span>
      </div>
      <div class='member'>
        <img src='https://l.top4top.io/p_38987sms00.gif'>
        <b>صاحب الموقع</b>
        <span>f5m-فخم</span>
      </div>
      <div class='member'>
        <img src='https://up6.cc/2026/09/178845001728551.png'>
        <b>المشرف العام</b>
        <span>عايش بمزاجي</span>
      </div>
    </div>
    <hr>
    <div class='team-contact'>تصميم:amir donity</div>
    <div class='team-contact'>جميع الحقوق : شات غمــــوض للجوال</div>
  </center>
</div>`).insertAfter('.btn-management');

$(`<link href='https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css2?family=Changa:wght@400;500;600;700&display=swap' rel='stylesheet'>`).appendTo('head');

$('#managementBtn').on('click', function() {
  $('#managementTeam').slideToggle(300);
});







$(`<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet">`).appendTo('head');

$(`<style>
.slider-header {
  cursor: pointer;
}
.slider-content {
  display: none;
  margin-top: 5px;
}
</style>`).appendTo('body');

$(`<center>
  <div class="slider-header">
    <div width="95%" style="background-color: #F5E6D3; color: #000000; border-radius: 8px 8px 20px 20px; border-bottom: 2px solid #ABABAB; border-top: 2px solid #ABABAB; padding: 0px !important; background-repeat: no-repeat; background-size: cover; background-position: center;">
      <font style="background-color: #D4C4A8; border-radius: 12px; font-family: 'Almarai', 'jazeera', FontAwesome; padding: 2px 15px; margin: 3px 10px; display: inline-block; font-size: 13px; font-weight: 400;">
        🌸 مرحبـــاً بكم في شات غمـــــوض للجوال 🌸
      </font>
    </div>
  </div>
</center>`).insertBefore("#d2");

$(`<div class="slider-content" style="border-radius: 10px; padding: 15px; margin-top: 5px; border: 2px solid #b93068; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.1); background: linear-gradient(135deg, #f5f5f5, #e8e8e8);">
  <center>
    <h3 style="color: #b93068; font-family: 'El Messiri', 'jazeera', 'Changa', sans-serif; font-size: 20px; margin-bottom: 10px;">👑 فريــــق الإدارة 👑</h3>
    <hr style="border-color: #b93068; margin: 10px 0;">
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 15px 0;">
      <div style="text-align: center;">
        <img src="https://up6.cc/2026/09/178845006693711.png" style="width: 70px; height: 70px; border-radius: 50%; border: 3px solid #b93068; box-shadow: 0 0 8px rgba(185,48,104,0.5);">
        <br><b style="color: #78939C; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 14px; display: block; margin-top: 5px;">ادارة الموقع</b>
        <br><span style="color: #BF1D6E; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 13px;">فطيم -اكتفيت</span>
      </div>
      <div style="text-align: center;">
        <img src="https://l.top4top.io/p_38987sms00.gif" style="width: 70px; height: 70px; border-radius: 50%; border: 3px solid #b93068; box-shadow: 0 0 8px rgba(185,48,104,0.5);">
        <br><b style="color: #78939C; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 14px; display: block; margin-top: 5px;">صاحب الموقع</b>
        <br><span style="color: #BF1D6E; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 13px;">f5m- فخم</span>
      </div>
      <div style="text-align: center;">
        <img src="https://up6.cc/2026/09/178845001728551.png" style="width: 70px; height: 70px; border-radius: 50%; border: 3px solid #b93068; box-shadow: 0 0 8px rgba(185,48,104,0.5);">
        <br><b style="color: #78939C; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 14px; display: block; margin-top: 5px;">المشرف العام</b>
        <br><span style="color: #BF1D6E; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 13px;">عايش بمزاجي</span>
      </div>
    </div>
    <hr style="border-color: #b93068; margin: 10px 0;">
    <div style="color: #555; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 13px; margin-top: 10px; text-align: center;">تصميم : amirdonity</div>
    <div style="color: #555; font-family: 'El Messiri', 'jazeera', sans-serif; font-size: 13px; margin-top: 5px; text-align: center;">جميع الحقوق : شات غمـــوض للجوال</div>
  </center>
</div>`).insertAfter('.slider-header');

$('.slider-header').on('click', function() {
  $('.slider-content').slideToggle(300);
});
