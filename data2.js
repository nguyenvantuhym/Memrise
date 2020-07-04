const data3 = [
  { wordOrigin: '幸せな', wordMean: 'hạnh phúc' },
  { wordOrigin: '得意な', wordMean: 'đắc ý, tâm đắc' },
  { wordOrigin: '苦手な', wordMean: 'yếu, kém; không thích, không chịu được' },
  { wordOrigin: '熱心な', wordMean: 'nhiệt tình, nhiệt tâm' },
  { wordOrigin: '夢中な', wordMean: 'say mê' },
  { wordOrigin: '退屈な', wordMean: 'chán, buồn chán' },
  { wordOrigin: '健康な', wordMean: 'khoẻ mạnh' },
  { wordOrigin: '苦しい', wordMean: 'đau đớn; đau khổ' },
  { wordOrigin: '平気な', wordMean: 'bình tĩnh; dửng dưng' },
  {
    wordOrigin: '悔しい',
    wordMean: 'đáng tiếc, đáng ân hận; cay cú,làm nản lòng',
  },
  { wordOrigin: '羨ましい', wordMean: 'thèm muốn; ghen tị' },
  { wordOrigin: '痒い', wordMean: 'ngứa' },
  { wordOrigin: '大人しい', wordMean: 'ngoan, hiền lành; ít nói' },
  { wordOrigin: '我慢強い', wordMean: 'kiên trì' },
  { wordOrigin: '正直な', wordMean: 'chính trực, thành thật' },
  { wordOrigin: 'けちな', wordMean: 'keo kiệt, bần tiện' },
  { wordOrigin: '積極的な', wordMean: 'tích cực, chủ động' },
  { wordOrigin: '消極的な', wordMean: 'tiêu cực, thụ động' },
  { wordOrigin: '満足な', wordMean: 'thoả mãn, hài lòng' },
  { wordOrigin: '不満な', wordMean: 'bất mãn, không hài lòng' },
  { wordOrigin: '不安な', wordMean: 'bất an, không yên tâm' },
  { wordOrigin: '大変な', wordMean: 'khó khăn, vất vả; kinh khủng' },
  { wordOrigin: '無理な', wordMean: 'vô lý, không thể; quá sức' },
  { wordOrigin: '不注意な', wordMean: 'sơ ý, bất cẩn' },
  { wordOrigin: '楽な', wordMean: 'dễ chịu, thoải mái' },
  { wordOrigin: '面倒な', wordMean: 'phiền hà' },
  { wordOrigin: '失礼な', wordMean: 'bất lịch sự' },
  { wordOrigin: '当然な', wordMean: 'đương nhiên' },
  { wordOrigin: '意外な', wordMean: 'ngạc nhiên, ngoài dự tính' },
  { wordOrigin: '結構な', wordMean: 'được, tạm được; No, thank you' },
  { wordOrigin: '派手な', wordMean: 'sặc sỡ; loè loẹt' },
  { wordOrigin: '地味な', wordMean: 'giản dị; không nổi bật' },
  { wordOrigin: '御洒落な', wordMean: 'diện; mốt; sang; ăn diện; trưng diện' },
  { wordOrigin: '変な', wordMean: 'lạ, kì dị, kì quái (weird)' },
  { wordOrigin: '不思議な', wordMean: 'kì lạ; huyền bí; kì diệu' },
  { wordOrigin: '増しな', wordMean: 'tốt hơn, thích hơn' },
  { wordOrigin: '無駄な', wordMean: 'vô ích' },
  { wordOrigin: '自由な', wordMean: 'tự do' },
  { wordOrigin: '不自由な', wordMean: 'tàn tật; bất tiện; bất lợi,' },
];

const data4 = [
  { wordOrigin: '世話', wordMean: 'trông nom, giúp đỡ' },
  { wordOrigin: '家庭', wordMean: 'nhà, gia đình' },
  { wordOrigin: '協力', wordMean: 'hiệp lực, hợp tác' },
  { wordOrigin: '感謝', wordMean: 'cảm tạ, cảm ơn' },
  { wordOrigin: 'お礼', wordMean: 'cảm ơn' },
  { wordOrigin: 'お詫び', wordMean: 'xin lỗi' },
  { wordOrigin: 'お辞儀', wordMean: 'cúi chào' },
  { wordOrigin: '握手', wordMean: 'bắt tay' },
  { wordOrigin: '意地悪', wordMean: 'xấu tính' },
  { wordOrigin: '悪戯', wordMean: 'trêu chọc, nghịch ngợm' },
  { wordOrigin: '節約', wordMean: 'tiết kiệm' },
  { wordOrigin: '経営', wordMean: 'kinh doanh' },
  { wordOrigin: '反省', wordMean: 'nhìn lại bản thân' },
  { wordOrigin: '実行', wordMean: 'ứng dụng, thực hành' },
  { wordOrigin: '進歩', wordMean: 'tiến bộ, tiến triển' },
  { wordOrigin: '変化', wordMean: 'thay đổi' },
  { wordOrigin: '発達', wordMean: 'phát triển' },
  { wordOrigin: '体力', wordMean: 'thể lực' },
  { wordOrigin: '出場', wordMean: 'tham gia' },
  { wordOrigin: '活躍', wordMean: 'hoạt động' },
  { wordOrigin: '競争', wordMean: 'cạnh tranh' },
  { wordOrigin: '応援', wordMean: 'cổ vũ' },
  { wordOrigin: '拍手', wordMean: 'vỗ tay' },
  { wordOrigin: '人気', wordMean: 'nổi tiếng' },
  { wordOrigin: '噂', wordMean: 'lời đồn' },
  { wordOrigin: '情報', wordMean: 'thông tin' },
  { wordOrigin: '交換', wordMean: 'trao đổi, thay thế' },
  { wordOrigin: '流行', wordMean: 'mốt, phát tán, lưu hành' },
  { wordOrigin: '宣伝', wordMean: 'tuyên truyền, công khai' },
  { wordOrigin: '広告', wordMean: 'quảng cáo' },
  { wordOrigin: '注目', wordMean: 'chú ý' },
  { wordOrigin: '通訳', wordMean: 'thông dịch (nói)' },
  { wordOrigin: '翻訳', wordMean: 'phiên dịch (viết)' },
  { wordOrigin: '伝言', wordMean: 'tin nhắn, lời nhắn; nhắn tin' },
  { wordOrigin: '報告', wordMean: 'báo cáo' },
  { wordOrigin: '録画', wordMean: 'ghi hình' },
  { wordOrigin: '混雑', wordMean: 'hỗn tạp, tắc nghẽn' },
  { wordOrigin: '渋滞', wordMean: 'tắc nghẽn, tắc đường' },
  { wordOrigin: '衝突', wordMean: 'xung đột, va chạm, đâm vào' },
  { wordOrigin: '被害', wordMean: 'thiệt hại' },
  { wordOrigin: '事故', wordMean: 'sự cố' },
  { wordOrigin: '事件', wordMean: 'sự kiện' },
  { wordOrigin: '故障', wordMean: 'hư hỏng' },
  { wordOrigin: '修理', wordMean: 'tu sửa, sửa chữa' },
  { wordOrigin: '停電', wordMean: 'mất điện' },
  { wordOrigin: '調子', wordMean: 'tình trạng (sức khỏe, máy móc)' },
  { wordOrigin: '緊張', wordMean: 'lo lắng, căng thẳng' },
  { wordOrigin: '自信', wordMean: 'tự tin' },
  { wordOrigin: '自慢', wordMean: 'tự hào, khoe khoang' },
  { wordOrigin: '感心', wordMean: 'ngưỡng mộ, hâm mộ' },
  { wordOrigin: '感動', wordMean: 'cảm động' },
  { wordOrigin: '興奮', wordMean: 'hưng phấn, phấn khích' },
  { wordOrigin: '感想', wordMean: 'cảm tưởng, ấn tượng' },
  { wordOrigin: '予想', wordMean: 'dự báo' },
  { wordOrigin: '専門', wordMean: 'chuyên môn, chuyên ngành' },
  { wordOrigin: '研究', wordMean: 'nghiên cứu' },
  { wordOrigin: '調査', wordMean: 'điều tra' },
  { wordOrigin: '原因', wordMean: 'nguyên nhân' },
  { wordOrigin: '結果', wordMean: 'kết quả' },
  { wordOrigin: '解決', wordMean: 'giải pháp, giải quyết, quyết định' },
  { wordOrigin: '確認', wordMean: 'xác nhận, xác minh' },
  { wordOrigin: '利用', wordMean: 'lợi dụng, sử dụng' },
  { wordOrigin: '理解', wordMean: 'hiểu, lĩnh hội, tiếp thu' },
  { wordOrigin: '発見', wordMean: 'phán hiện' },
  { wordOrigin: '発明', wordMean: 'phát minh' },
  { wordOrigin: '関係', wordMean: 'quan hệ' },
  { wordOrigin: '団体', wordMean: 'nhóm, đoàn' },
  { wordOrigin: '選挙', wordMean: 'bầu cử' },
  { wordOrigin: '税金', wordMean: 'thuế' },
  { wordOrigin: '責任', wordMean: 'trách nhiệm' },
  { wordOrigin: '書類', wordMean: 'tài liệu, mẫu đơn' },
  { wordOrigin: '題名', wordMean: 'tiêu đề, đầu đề' },
  { wordOrigin: '条件', wordMean: 'điều kiện' },
  { wordOrigin: '締め切り', wordMean: 'hạn cuối, hạn chót' },
  { wordOrigin: '期間', wordMean: 'thời kì, khoảng thời gian' },
  { wordOrigin: '倍', wordMean: 'gấp đôi, __ lần' },
  { wordOrigin: 'くじ', wordMean: 'rút thăm' },
  { wordOrigin: '近道', wordMean: 'đường tắt' },
  { wordOrigin: '中心', wordMean: 'trung tâm' },
  { wordOrigin: '辺り', wordMean: 'ven, gần, vùng lân cận' },
  { wordOrigin: '周り・回り', wordMean: 'vùng xung quanh' },
  { wordOrigin: '穴', wordMean: 'hố' },
  { wordOrigin: '列', wordMean: 'hàng, xếp hàng' },
  { wordOrigin: '幅', wordMean: 'chiều rộng, chiều ngang;' },
  { wordOrigin: '範囲', wordMean: 'phạm vi' },
  { wordOrigin: '内容', wordMean: 'nội dung' },
  { wordOrigin: '中身', wordMean: 'bên trong, nội dung' },
  { wordOrigin: '特徴', wordMean: 'đặc trưng' },
  { wordOrigin: '普通', wordMean: 'thông thường, bình thường' },
  { wordOrigin: '当たり前', wordMean: 'tất nhiên' },
  { wordOrigin: '偽', wordMean: 'giả, lừa đảo' },
  { wordOrigin: '別', wordMean: 'khác' },
  { wordOrigin: '国籍', wordMean: 'quốc tịch' },
  { wordOrigin: '東洋', wordMean: 'phương Đông' },
  { wordOrigin: '西洋', wordMean: 'phương Tây' },
  { wordOrigin: '国際', wordMean: 'quốc tế' },
  { wordOrigin: '自然', wordMean: 'thiên nhiên' },
  { wordOrigin: '景色', wordMean: 'cảnh sắc, phong cảnh' },
  { wordOrigin: '宗教', wordMean: 'tôn giáo' },
  { wordOrigin: '愛', wordMean: 'yêu, yêu thương' },
];

const data5 = [
  { wordOrigin: '届く', wordMean: 'được chuyển đến, đạt được' },
  { wordOrigin: '届ける', wordMean: 'chuyển đến, trình báo' },
  {
    wordOrigin: '掻く',
    wordMean: 'Chèo xuồng; gãi(Cào; bới); Xúc đi bằng xẻng, Đổ mồ hôi;',
  },
  { wordOrigin: '掴む', wordMean: 'Nắm, giữ, bắt tóm, nắm bắt (nội dung)' },
  { wordOrigin: '握る', wordMean: 'Nắm, túm' },
  { wordOrigin: '押さえる', wordMean: 'Giữ, nắm' },
  { wordOrigin: '近づく', wordMean: 'Tiến gần' },
  { wordOrigin: '近づける', wordMean: 'Di chuyển đến gần' },
  { wordOrigin: '合う', wordMean: 'bắt gặp, hợp, đúng' },
  { wordOrigin: '合わせる', wordMean: 'Điều chỉnh giờ, làm cho hợp' },
  { wordOrigin: '当たる', wordMean: 'bị đánh' },
  { wordOrigin: '当てる', wordMean: 'đánh trúng, bắn trúng' },
  { wordOrigin: '比べる', wordMean: 'So sánh' },
  { wordOrigin: '似合う', wordMean: 'Hợp, xứng, vừa' },
  { wordOrigin: '似る', wordMean: 'Giống' },
  { wordOrigin: '似せる', wordMean: 'Bắt chước, Mô phỏng' },
  { wordOrigin: '分かれる', wordMean: 'được chia ra' },
  { wordOrigin: '分ける', wordMean: 'chia ra' },
  { wordOrigin: '足す', wordMean: 'thêm vào' },
  {
    wordOrigin: '引く',
    wordMean: 'Kéo; rút; bị (cảm); tra ( từ điển ), đẩy, gạch chân, trừ',
  },
  { wordOrigin: '増える', wordMean: 'tăng lên' },
  { wordOrigin: '増やす', wordMean: 'làm tăng lên' },
  { wordOrigin: '減る', wordMean: 'giảm xuống' },
  { wordOrigin: '減らす', wordMean: 'làm giảm xuống' },
  { wordOrigin: '変わる', wordMean: 'thay đổi (tự/tha)' },
  { wordOrigin: '変える', wordMean: 'thay đổi (tha)' },
  {
    wordOrigin: '替わる・代わる・換わる',
    wordMean: 'thay, thay thế, thay đổi (tự/tha)',
  },
  {
    wordOrigin: '替える・代える・換える',
    wordMean: 'thay, thay thế, thay đổi (tha)',
  },
  { wordOrigin: '返る', wordMean: 'trả lại (tự)' },
  { wordOrigin: '返す', wordMean: 'trả lại (tha)' },
  { wordOrigin: '譲る', wordMean: 'nhường, bàn giao' },
  { wordOrigin: '助かる', wordMean: 'được giúp' },
  { wordOrigin: '助ける', wordMean: 'giúp đỡ' },
  { wordOrigin: '苛める', wordMean: 'bắt nạt; ăn hiếp' },
  { wordOrigin: '騙す', wordMean: 'Lừa; đánh lừa; lừa gạt' },
  { wordOrigin: '盗む', wordMean: 'trộm' },
  { wordOrigin: '刺さる', wordMean: 'mắc, hóc (tự)' },
  { wordOrigin: '刺す', wordMean: 'cắn, chích, châm (tha)' },
  { wordOrigin: '殺す', wordMean: 'giết hại' },
  { wordOrigin: '隠れる', wordMean: 'lẩn trốn (tự)' },
  {
    wordOrigin: '隠す',
    wordMean: 'Bao bọc; che; che giấu; che đậy; giấu; giấu giếm (tha)',
  },
  { wordOrigin: '埋まる', wordMean: 'được chôn, bị lấp' },
  { wordOrigin: '埋める', wordMean: 'chôn, lấp' },
  { wordOrigin: '囲む', wordMean: 'bao bọc, vây quanh' },
  {
    wordOrigin: '詰まる',
    wordMean: 'Đầy; đầy chặt; tắc; bít; bị ngưng trệ (tự)',
  },
  {
    wordOrigin: '詰める',
    wordMean: 'lấp, nhét vào, ấn chặt, giảm, rút ngắn (tha)',
  },
  { wordOrigin: '開く', wordMean: 'mở, tổ chức' },
  { wordOrigin: '閉じる', wordMean: 'đóng' },
  { wordOrigin: '飛ぶ', wordMean: 'bay, truyền bá (tự)' },
  { wordOrigin: '飛ばす', wordMean: 'bay, thổi đi, bắn, phóng (tha)' },
  {
    wordOrigin: '振る',
    wordMean: 'chỉ định (công việc) , lắc , rung , ngoe nguẩy',
  },
  { wordOrigin: '捲る', wordMean: 'lật lên' },
  {
    wordOrigin: '見かける',
    wordMean: 'thông báo , yết thị , tìm ra , bắt gặp',
  },
  { wordOrigin: '確かめる', wordMean: 'xác nhận , kiểm tra' },
  { wordOrigin: '試す', wordMean: 'thử nghiệm , thí nghiệm' },
  { wordOrigin: '繰り返す', wordMean: 'lặp lại ,' },
  { wordOrigin: '訳す', wordMean: 'dịch (phiên dịch , thông dịch)' },
  { wordOrigin: '行う', wordMean: 'tổ chức sự kiện' },
  { wordOrigin: '間違う', wordMean: 'sai , không đúng (tự/tha)' },
  { wordOrigin: '間違える', wordMean: 'Sai; nhầm lẫn, làm không đúng (tha)' },
  { wordOrigin: '許す', wordMean: 'cho phép , tha thứ' },
  { wordOrigin: '慣れる', wordMean: 'quen , quen với , trở nên quen với' },
  { wordOrigin: '慣らす', wordMean: 'làm quen' },
  { wordOrigin: '立つ', wordMean: 'đứng , đứng lên (tự)' },
  { wordOrigin: '立てる', wordMean: 'dựng lên , lập nên (tha)' },
  { wordOrigin: '建つ', wordMean: 'được xây dựng , được mọc lên (tự)' },
  { wordOrigin: '建てる', wordMean: 'xây dựng (tha)' },
  { wordOrigin: '育つ', wordMean: 'lớn lên , lớn khôn , phát triển (tự)' },
  { wordOrigin: '育てる', wordMean: 'nuôi dưỡng , nuôi lớn .. (tha)' },
  { wordOrigin: '生える', wordMean: 'mọc (răng) , phát triển ,sinh sôi (tự)' },
  { wordOrigin: '生やす', wordMean: 'nuôi cấy ,trồng trọt (tha)' },
  { wordOrigin: '汚れる', wordMean: 'ô nhiễm , (tự)' },
  { wordOrigin: '汚す', wordMean: 'làm ô nhiễm , bẩn (tha)' },
  { wordOrigin: '壊れる', wordMean: 'hỏng ,bị hỏng (tự)' },
  { wordOrigin: '壊す', wordMean: 'làm hỏng , (tha)' },
  { wordOrigin: '割れる', wordMean: 'bị vỡ vụn , (tự)' },
  { wordOrigin: '割る', wordMean: 'đập vỡ , chia ra , cắt nhỏ , đập nát(tha)' },
  { wordOrigin: '折れる', wordMean: 'bị gãy ,(tự)' },
  { wordOrigin: '折る', wordMean: 'bẻ gãy (tha)' },
  { wordOrigin: '破れる', wordMean: 'bị rách(tự)' },
  { wordOrigin: '破る', wordMean: 'làm rách ,xe rách(tha)' },
  { wordOrigin: '曲がる', wordMean: 'bị gập, bị uốn cong(tự)' },
  { wordOrigin: '曲げる', wordMean: 'gập, uốn cong(tha)' },
  { wordOrigin: '外れる', wordMean: 'tuột ra , chệch ra , rời ra' },
  { wordOrigin: '外す', wordMean: 'làm tuột ra , tháo ra' },
  { wordOrigin: '揺れる', wordMean: 'bập bềnh , chệnh choạng , dao động (tự)' },
  { wordOrigin: '揺らす', wordMean: 'làm dao động , lung lay (tha)' },
  { wordOrigin: '流れる', wordMean: 'chảy , nước trôi ,trôi tuột (tự)' },
  {
    wordOrigin: '流す',
    wordMean: 'làm lan truyền (tiếng đồn), làm cho chảy đi(tha)',
  },
  { wordOrigin: '濡れる', wordMean: 'bị ướt ,dính , đẫm(tự)' },
  { wordOrigin: '濡らす', wordMean: 'làm ướt (tha)' },
  { wordOrigin: '迷う', wordMean: 'bị lúng túng , không hiểu' },
  { wordOrigin: '悩む', wordMean: 'khổ , lo lắng , buồn phiền' },
  { wordOrigin: '慌てる', wordMean: 'trở nên lộn xộn , hốt hoảng , bối rối' },
  { wordOrigin: '覚める', wordMean: 'tỉnh dậy ,thức giấc(tự)' },
  { wordOrigin: '覚ます', wordMean: 'đánh thức , làm tỉnh giấc (tha)' },
  { wordOrigin: '眠る', wordMean: 'ngủ' },
  { wordOrigin: '祈る', wordMean: 'cầu nguyện' },
  { wordOrigin: '祝う', wordMean: 'chúc mừng' },
  { wordOrigin: '感じる', wordMean: 'cảm giác ,cảm thấy' },
];