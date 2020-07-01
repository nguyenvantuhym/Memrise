const listWord = [
  {
    ja: '男性',
    vi: 'đàn ông',
  },
  {
    ja: '女性',
    vi: 'phụ nữ',
  },
  {
    ja: '高齢',
    vi: 'tuổi cao',
  },
  {
    ja: '年上',
    vi: 'người lớn tuổi hơn',
  },
  {
    ja: '目上',
    vi: 'cấp trên',
  },
  {
    ja: '先輩',
    vi: 'tiền bối, lớp trên',
  },
  {
    ja: '後輩',
    vi: 'hậu bối, lớp dưới',
  },
  {
    ja: '上司',
    vi: 'cấp trên, ông chủ',
  },
  {
    ja: '同僚',
    vi: 'đồng nghiệp',
  },
  {
    ja: '相手',
    vi: 'đối phương, đối thủ',
  },
  {
    ja: '知り合い',
    vi: 'người quen',
  },
  {
    ja: '友人',
    vi: 'bạn bè',
  },
  {
    ja: '仲',
    vi: 'quan hệ',
  },
  {
    ja: '生年月日',
    vi: 'ngày tháng năm sinh',
  },
  {
    ja: '誕生',
    vi: 'sự ra đời',
  },
  {
    ja: '年',
    vi: 'năm, tuổi',
  },
  {
    ja: '出身',
    vi: 'xuất thân, quê quán',
  },
  {
    ja: '故郷',
    vi: 'quê hương, quê nhà',
  },
  {
    ja: '成長',
    vi: 'tăng trưởng, trưởng thành',
  },
  {
    ja: '成人',
    vi: 'sự trưởng thành, người trưởng thành',
  },
  {
    ja: '合格',
    vi: 'đỗ, trúng tuyển',
  },
  {
    ja: '進学',
    vi: 'học lên cao hơn, (esp.) học lên đại học',
  },
  {
    ja: '退学',
    vi: 'bỏ học, thôi học',
  },
  {
    ja: '就職',
    vi: 'nhận việc;tìm việc',
  },
  {
    ja: '退職',
    vi: 'từ chức, nghỉ việc',
  },
  {
    ja: '失業',
    vi: 'thất nghiệp',
  },
  {
    ja: '残業',
    vi: 'làm thêm giờ, làm việc ngoài giờ',
  },
  {
    ja: '生活',
    vi: 'sinh sống, sinh hoạt',
  },
  {
    ja: '通勤',
    vi: 'sự đi làm',
  },
  {
    ja: '学歴',
    vi: 'quá trình học hành, bằng cấp',
  },
  {
    ja: '給料',
    vi: 'tiền lương',
  },
  {
    ja: '面接',
    vi: 'phỏng vấn',
  },
  {
    ja: '休憩',
    vi: 'nghỉ, nghỉ ngơi',
  },
  {
    ja: '観光',
    vi: 'du lịch, thăm quan',
  },
  {
    ja: '帰国',
    vi: 'về nước',
  },
  {
    ja: '帰省',
    vi: 'về quê',
  },
  {
    ja: '帰宅',
    vi: 'về nhà',
  },
  {
    ja: '参加',
    vi: 'tham gia',
  },
  {
    ja: '出席',
    vi: 'có mặt, có tham dự',
  },
  {
    ja: '欠席',
    vi: 'vắng mặt, nghỉ (học)',
  },
  {
    ja: '遅刻',
    vi: 'muộn, đến muộn',
  },
  {
    ja: '化粧',
    vi: 'hoá trang',
  },
  {
    ja: '計算',
    vi: 'tính toán',
  },
  {
    ja: '計画',
    vi: 'kế hoạch',
  },
  {
    ja: '成功',
    vi: 'thành công',
  },
  {
    ja: '失敗',
    vi: 'thất bại',
  },
  {
    ja: '準備',
    vi: 'chuẩn bị',
  },
  {
    ja: '整理',
    vi: 'thu xếp, chỉnh sửa;cắt giảm, vứt bỏ',
  },
  {
    ja: '注文',
    vi: 'đặt hàng, gọi món',
  },
  {
    ja: '貯金',
    vi: 'tiền tiết kiệm, tiền gửi ngân hàng',
  },
  {
    ja: '徹夜',
    vi: 'thức trắng cả đêm, thức đêm',
  },
  {
    ja: '引っ越し',
    vi: 'chuyển nhà',
  },
  {
    ja: '身長',
    vi: 'chiều cao',
  },
  {
    ja: '体重',
    vi: 'cân nặng',
  },
  {
    ja: '怪我',
    vi: 'Vết thương',
  },
  {
    ja: '会',
    vi: 'tiệc, liên hoan',
  },
  {
    ja: '趣味',
    vi: 'sở thích',
  },
  {
    ja: '興味',
    vi: 'hứng thú',
  },
  {
    ja: '思い出',
    vi: 'kỷ niệm, hồi ức',
  },
  {
    ja: '冗談',
    vi: 'đùa, nói đùa',
  },
  {
    ja: '目的',
    vi: 'mục đích',
  },
  {
    ja: '約束',
    vi: 'lời hứa;cuộc hẹn',
  },
  {
    ja: 'お喋り',
    vi: 'hay nói, hay chuyện',
  },
  {
    ja: '遠慮',
    vi: 'ngại, khách khí;kiềm chế',
  },
  {
    ja: '我慢',
    vi: 'nhẫn nhịn, chịu đựng',
  },
  {
    ja: '迷惑',
    vi: 'làm phiền, quấy rầy',
  },
  {
    ja: '希望',
    vi: 'hi vọng;ý muốn',
  },
  {
    ja: '夢',
    vi: 'giấc mơ;ước mơ',
  },
  {
    ja: '賛成',
    vi: 'tán thành, ủng hộ',
  },
  {
    ja: '反対',
    vi: 'phản đối',
  },
  {
    ja: '想像',
    vi: 'tưởng tượng',
  },
  {
    ja: '努力',
    vi: 'cố gắng, nỗ lực',
  },
  {
    ja: '太陽',
    vi: 'mặt trời',
  },
  {
    ja: '地球',
    vi: 'trái đất',
  },
  {
    ja: '温度',
    vi: 'nhiệt độ',
  },
  {
    ja: '湿度',
    vi: 'độ ẩm',
  },
  {
    ja: '湿気',
    vi: 'hơi ẩm',
  },
  {
    ja: '梅雨',
    vi: 'mùa mưa',
  },
  {
    ja: 'かび',
    vi: 'mốc',
  },
  {
    ja: '暖房',
    vi: 'máy sưởi',
  },
  {
    ja: '皮',
    vi: 'da, vỏ',
  },
  {
    ja: '缶',
    vi: 'can, hộp thiếc',
  },
  {
    ja: '瓶',
    vi: 'bình, lọ',
  },
  {
    ja: '画面',
    vi: 'màn hình',
  },
  {
    ja: '番組',
    vi: 'chương trình (TV, radio)',
  },
  {
    ja: '記事',
    vi: 'kí sự, phóng sự',
  },
  {
    ja: '近所',
    vi: 'hàng xóm, vùng lân cận',
  },
  {
    ja: '警察',
    vi: 'cảnh sát (police)',
  },
  {
    ja: '犯人',
    vi: 'hung thủ, tội phạm',
  },
  {
    ja: '小銭',
    vi: 'tiền lẻ',
  },
  {
    ja: 'ご馳走',
    vi: 'khao, chiêu đãi',
  },
  {
    ja: '作者',
    vi: 'tác giả',
  },
  {
    ja: '作品',
    vi: 'tác phẩm',
  },
  {
    ja: '制服',
    vi: 'đồng phục',
  },
  {
    ja: '洗剤',
    vi: 'thuốc tẩy',
  },
  {
    ja: '底',
    vi: 'đáy',
  },
  {
    ja: '地下',
    vi: 'tầng hầm',
  },
  {
    ja: '寺',
    vi: 'chùa',
  },
  {
    ja: '道路',
    vi: 'đường lớn',
  },
  {
    ja: '高速道路',
    vi: 'đường cao tốc',
  },
  {
    ja: '道',
    vi: 'con đường, con phố',
  },
  {
    ja: '坂',
    vi: 'dốc, đường dốc',
  },
  {
    ja: '煙',
    vi: 'khói',
  },
  {
    ja: '灰',
    vi: 'tro',
  },
  {
    ja: '判',
    vi: 'tem, con dấu',
  },
  {
    ja: '名刺',
    vi: 'danh thiếp, card visit',
  },
  {
    ja: '免許',
    vi: 'bằng, giấy phép, chứng chỉ',
  },
  {
    ja: '多く',
    vi: 'nhiều',
  },
  {
    ja: '前半',
    vi: 'nửa đầu',
  },
  {
    ja: '後半',
    vi: 'nửa cuối',
  },
  {
    ja: '最高',
    vi: 'tốt nhất, tuyệt vời',
  },
  {
    ja: '最低',
    vi: 'đểu nhất, tồi nhất',
  },
  {
    ja: '最初',
    vi: 'đầu tiền',
  },
  {
    ja: '最後',
    vi: 'cuối cùng',
  },
  {
    ja: '自動',
    vi: 'tự động',
  },
  {
    ja: '種類',
    vi: 'loại, chủng loại',
  },
  {
    ja: '性格',
    vi: 'tính cách',
  },
  {
    ja: '性質',
    vi: 'tính chất, thuộc tính',
  },
  {
    ja: '順番',
    vi: 'thứ tự, lần lượt',
  },
  {
    ja: '番',
    vi: 'lượt',
  },
  {
    ja: '番をする',
    vi: 'canh, trông, đề phòng',
  },
  {
    ja: '留守番',
    vi: 'trông nhà',
  },
  {
    ja: '方法',
    vi: 'phương pháp',
  },
  {
    ja: '製品',
    vi: 'sản phẩm, hàng hoá',
  },
  {
    ja: '値上がり',
    vi: 'tăng giá',
  },
  {
    ja: '値下がり',
    vi: 'giảm giá',
  },
  {
    ja: '生',
    vi: 'tươi, sống',
  },
];
const data2 = [
  { wordOrigin: '渇く', wordMean: 'khát nước, khô nẻ' },
  { wordOrigin: '嗅ぐ', wordMean: 'ngửi' },
  { wordOrigin: '叩く', wordMean: 'vỗ, đánh' },
  { wordOrigin: '殴る', wordMean: 'đấm' },
  { wordOrigin: '蹴る', wordMean: 'đá' },
  { wordOrigin: '抱く', wordMean: 'ôm' },
  { wordOrigin: '倒れる', wordMean: 'ngã, đổ' },
  { wordOrigin: '倒す', wordMean: 'đẩy ngã, đánh bại' },
  { wordOrigin: '起きる、起こる', wordMean: 'dậy;xảy ra' },
  { wordOrigin: '起こす', wordMean: 'đánh thức;dựng dậy;gây ra;(Tha)' },
  { wordOrigin: '尋ねる', wordMean: 'hỏi' },
  { wordOrigin: '呼ぶ', wordMean: 'gọi' },
  { wordOrigin: '叫ぶ', wordMean: 'kêu, hét' },
  { wordOrigin: '黙る', wordMean: 'im' },
  { wordOrigin: '飼う', wordMean: 'nuôi' },
  { wordOrigin: '数える', wordMean: 'đếm;xếp thứ hạng' },
  { wordOrigin: '乾く', wordMean: 'khô' },
  { wordOrigin: '乾かす', wordMean: 'làm khô' },
  { wordOrigin: '畳む', wordMean: 'gấp' },
  { wordOrigin: '誘う', wordMean: 'mời' },
  { wordOrigin: '奢る', wordMean: 'khao, chiêu đãi' },
  { wordOrigin: '預かる', wordMean: 'trông nom' },
  { wordOrigin: '預ける', wordMean: 'gửi, nhờ trông nom (Tha)' },
  { wordOrigin: '決まる', wordMean: 'được quyết;được làm hoàn chỉnh' },
  {
    wordOrigin: '決める',
    wordMean: 'quyết định;luôn làm ~;làm hoàn chỉnh (Tha)',
  },
  { wordOrigin: '写る', wordMean: 'chụp ảnh (máy), được in ra (ảnh)' },
  { wordOrigin: '写す', wordMean: 'chụp ảnh (người) (Tha)' },
  { wordOrigin: '思い出す', wordMean: 'nhớ' },
  { wordOrigin: '教わる', wordMean: 'học' },
  { wordOrigin: '申し込む', wordMean: 'đăng ký' },
  { wordOrigin: '断る', wordMean: 'từ chối' },
  { wordOrigin: '見つかる', wordMean: 'được tìm thấy' },
  { wordOrigin: '見つける', wordMean: 'tìm thấy (Tha)' },
  { wordOrigin: '捕まる', wordMean: 'bị bắt' },
  { wordOrigin: '捕まえる', wordMean: 'bắt (Tha)' },
  { wordOrigin: '乗る', wordMean: 'lên xe, đi xe' },
  { wordOrigin: '乗せる', wordMean: 'chở đi, cho đi nhờ (Tha)' },
  {
    wordOrigin: '降りる、下りる',
    wordMean: 'xuống xe;rơi xuống;be shut;receive (approval...)',
  },
  {
    wordOrigin: '降ろす、下ろす',
    wordMean: 'cho xuống xe;lấy xuống, hạ xuống;rút ra (Tha)',
  },
  { wordOrigin: '直る', wordMean: 'được sửa' },
  { wordOrigin: '直す', wordMean: 'chữa sửa (Tha)' },
  { wordOrigin: '治る', wordMean: 'khỏi bệnh, hồi phục' },
  { wordOrigin: '治す', wordMean: 'chữa bệnh (Tha)' },
  { wordOrigin: '亡くなる', wordMean: 'chết' },
  { wordOrigin: '亡くす', wordMean: 'mất (người thân) (Tha)' },
  { wordOrigin: '生まれる', wordMean: 'được sinh ra, tạo ra' },
  { wordOrigin: '生む、産む', wordMean: 'sinh ra, tạo ra (Tha)' },
  { wordOrigin: '出会う', wordMean: 'gặp (tình cờ)' },
  { wordOrigin: '訪ねる', wordMean: 'đến thăm' },
  { wordOrigin: '付き合う', wordMean: 'đi cùng;hẹn hò' },
  {
    wordOrigin: '効く',
    wordMean: 'có tác dụng, có hiệu quả, có ảnh hưởng, có kết quả',
  },
  { wordOrigin: '流行る', wordMean: 'lưu hành, thịnh hành' },
  { wordOrigin: '経つ', wordMean: 'trải qua, trôi qua' },
  { wordOrigin: '間に合う', wordMean: 'kịp thời, đúng lúc, vừa đủ' },
  { wordOrigin: '間に合わせる', wordMean: 'kết thúc đúng thời gian (Tha)' },
  {
    wordOrigin: '通う',
    wordMean: 'đi học, đi làm, tới lui, hiểu (cảm giác của ai đó)',
  },
  { wordOrigin: '込む', wordMean: 'đông đúc' },
  { wordOrigin: 'すれ違う', wordMean: 'lướt qua, vượt qua' },
  {
    wordOrigin: '掛かる',
    wordMean: 'treo, cần thiết (thời gian, tiền bạc ...), (cái gì )bắt đầu',
  },
  {
    wordOrigin: '掛ける',
    wordMean: 'treo, bắt đầu, tốn, chấm (nước tương ...), nghe đt',
  },
  { wordOrigin: '動く', wordMean: 'di chuyển, hoạt động (máy móc)' },
  {
    wordOrigin: '動かす',
    wordMean: 'vận hành, làm chuyển động (máy móc), vận động (Tha)',
  },
  { wordOrigin: '離れる', wordMean: 'rời, chia ly, cách' },
  { wordOrigin: '離す', wordMean: 'để xa, tránh xa, làm cho cách ly (Tha)' },
  { wordOrigin: 'ぶつかる', wordMean: 'va vào, đập vào' },
  { wordOrigin: 'ぶつける', wordMean: 'đụng (xe) (Tha)' },
  { wordOrigin: '零れる', wordMean: 'bị tràn ra, bị đổ, bị trào ra' },
  { wordOrigin: '零す', wordMean: 'làm tràn, đánh đổ, làm đổ (Tha)' },
  { wordOrigin: '拭く', wordMean: 'lau, chùi, quét dọn' },
  {
    wordOrigin: '片付く',
    wordMean: 'được hoàn thành, kết thúc, được giải quyết, được dọn dẹp',
  },
  { wordOrigin: '片付ける', wordMean: 'dọn, dẹp, cất (Tha)' },
  { wordOrigin: '包む', wordMean: 'bọc, gói, bao bọc' },
  { wordOrigin: '張る', wordMean: 'căng ra, chăng ra, mắc' },
  { wordOrigin: '無くなる', wordMean: 'bị mất, hết' },
  { wordOrigin: '無くす', wordMean: 'mất (Tha)' },
  { wordOrigin: '足りる', wordMean: 'đủ' },
  { wordOrigin: '残る', wordMean: 'còn lại, sót lại, rơi rớt (Tự)' },
  { wordOrigin: '残す', wordMean: 'bỏ lại, sót lại (Tha)' },
  { wordOrigin: '腐る', wordMean: 'thối, ôi thiu, suy đồi' },
  { wordOrigin: '剥ける', wordMean: '(quả) được lột, bóc, gọt (vỏ)' },
  { wordOrigin: '剥く', wordMean: 'bóc, lột, gọt (Tha)' },
  { wordOrigin: '滑る', wordMean: 'trượt chân' },
  { wordOrigin: '積もる', wordMean: 'chất đống' },
  { wordOrigin: '積む', wordMean: 'chồng chất, xếp' },
  { wordOrigin: '空く', wordMean: 'mở, trống, sẵn có (Tự)' },
  {
    wordOrigin: '空ける',
    wordMean: 'làm cạn, làm rỗng, để trống, bỏ cách (Tha)',
  },
  { wordOrigin: '下がる', wordMean: 'hạ xuống, hạ bớt, giảm đi (Tự)' },
  { wordOrigin: '下げる', wordMean: 'hạ, giảm (Tha)' },
  { wordOrigin: '冷える', wordMean: 'lạnh đi, nguội đi (Tự)' },
  { wordOrigin: '冷やす', wordMean: 'làm lạnh, hạ nhiệt, giữ bình tĩnh (Tha)' },
  { wordOrigin: '冷める', wordMean: 'nguội đi, lạnh đi (Tự)' },
  { wordOrigin: '冷ます', wordMean: 'làm lạnh, làm nguội (Tha)' },
  { wordOrigin: '燃える', wordMean: 'cháy, đốt (Tự)' },
  { wordOrigin: '燃やす', wordMean: 'thiêu đốt, phóng hỏa (Tha)' },
  { wordOrigin: '沸く', wordMean: 'sôi lên (Tự)' },
  { wordOrigin: '沸かす', wordMean: 'đun sôi (Tha)' },
  { wordOrigin: '鳴る', wordMean: 'reo, gáy, hú, kêu (Tự)' },
  { wordOrigin: '鳴らす', wordMean: 'làm phát ra tiếng kêu (Tha)' },
  {
    wordOrigin: '役立つ・役に立つ',
    wordMean: 'có ích, có tác dụng, phục vụ mục đích (Tự)',
  },
  { wordOrigin: '役立てる・役に立てる', wordMean: 'làm cho có ích (Tha)' },
  { wordOrigin: '飾り', wordMean: 'sự trang trí, đồ trang trí' },
  { wordOrigin: '遊び', wordMean: 'trò chơi, cách chơi' },
  { wordOrigin: '集まり', wordMean: 'cuộc họp, sự tụ họp' },
  { wordOrigin: '教え', wordMean: 'lời dạy' },
  { wordOrigin: '踊り', wordMean: 'điệu nhảy' },
  { wordOrigin: '思い', wordMean: 'suy nghĩ, tình cảm' },
  { wordOrigin: '考え', wordMean: 'suy nghĩ, ý tưởng' },
  { wordOrigin: '片付け', wordMean: 'sự sắp xếp, bố trí' },
  { wordOrigin: '手伝い', wordMean: 'sự giúp đỡ' },
  { wordOrigin: '働き', wordMean: 'chức năng, hoạt động' },
  { wordOrigin: '決まり', wordMean: 'quy định, quyết định' },
  { wordOrigin: '騒ぎ', wordMean: 'sự ồn ào, quấy rầy' },
  { wordOrigin: '知らせ', wordMean: 'thông báo, tin tức' },
  { wordOrigin: '頼み', wordMean: 'sự yêu cầu, nhờ cậy' },
  { wordOrigin: '疲れ', wordMean: 'sự mệt mỏi' },
  { wordOrigin: '違い', wordMean: 'sự khác nhau' },
  { wordOrigin: '始め', wordMean: 'lúc đầu, khởi đầu' },
  { wordOrigin: '続き', wordMean: 'sự tiếp tục;phần tiếp theo' },
  { wordOrigin: '暮れ', wordMean: 'cuối, kết;(cuối năm;chiều tối)' },
  { wordOrigin: '行き', wordMean: 'đi' },
  { wordOrigin: '帰り', wordMean: 'về' },
  { wordOrigin: '急ぎ', wordMean: 'sự gấp rút, khẩn cấp' },
  { wordOrigin: '遅れ', wordMean: 'chậm trễ, muộn' },
  { wordOrigin: '貸し', wordMean: 'cho vay, cho mượn' },
  { wordOrigin: '借り', wordMean: 'đi vay, đi mượn' },
  { wordOrigin: '勝ち', wordMean: 'thắng' },
  { wordOrigin: '負け', wordMean: 'thua' },
  { wordOrigin: '迎え', wordMean: 'việc tiếp đón, đưa đón' },
  { wordOrigin: '始まり', wordMean: 'bắt đầu' },
  { wordOrigin: '終わり', wordMean: 'kết thúc' },
  { wordOrigin: '戻り', wordMean: 'trở về' },
  { wordOrigin: '別れ', wordMean: 'ra đi' },
  { wordOrigin: '喜び', wordMean: 'niềm hân hạnh, sung sướng' },
  { wordOrigin: '楽しみ', wordMean: 'sự vui vẻ, thú vị' },
  { wordOrigin: '笑い', wordMean: 'tiếng cười' },
  { wordOrigin: '驚き', wordMean: 'sự ngạc nhiên' },
  { wordOrigin: '怒り', wordMean: 'sự tức giận' },
  { wordOrigin: '悲しみ', wordMean: 'sự buồn thương, bi ai' },
];

const abcsd = {
  course: {
    id: '12313',
    courseName: 'mimi karaoboeru',
    wordNumber: 825,
    sectionList: [
      {
        sectionName: 'danh tu',
        sectionId: 'asd',
      },
    ],
    language: 'japanese',
    index: 1,
  },
  unit: {
    id: 'asd',
    courseID: 'adsasd',
    sectionName: 'danh tu',
    wordLength: 127,
    wordList: [
      {
        wordId: ' ads',
        wordOrigin: 'dans',
        wordMean: '',
      },
    ],
    index: 1,
  },
  word: {
    wordId: 'ads',
    unitId: 'sectionid',
    wordOrigin: 'danse',
    wordOption: [],
    wordMean: 'ádasd',
    description: [],
  },
  user: {
    UID: 'asdasd',
    displayName: 'nguyeenx Vawn tus',
    avatar: 'asdasd',
    myCourse: {
      courseID: {
        wordLearned: 30,
        listSection: [
          {
            sectionId: 'ádasd',
            wordLearned: 10,
          },
        ],
        stackLearning: [[], [], [], [], [], [], []],
        listWordLearned: [{ id: 'âsd' }],
      },
    },
  },
};

const listUnit = [
  { unitName: 'UNIT 01 - Danh từ' },
  { unitName: 'UNIT02 - Động từ' },
  { unitName: 'Unit03 - Tính từ' },
  { unitName: 'Unit04 - Danh từ' },
  { unitName: 'Unit05 - Động từ' },
  { unitName: 'Unit06 - Katakana' },
  { unitName: 'Unit07 - Tính từ' },
  { unitName: 'Unit08 - Phó từ' },
  { unitName: 'Unit09 - Danh từ' },
  { unitName: 'Unit10 - Động từ' },
  { unitName: 'Unit11 - Katakana' },
];

export { data2 };
