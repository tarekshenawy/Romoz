import React from 'react';
import "./Skills.css";
import Title from '../Title/Title';
import customerfocus from "../Images/customer-focus.png";
import expertise from "../Images/user-experience.png";
import agile from "../Images/agile.png";
import goodquality from "../Images/good-quality.png";
import transparent from "../Images/transparency.png";
import costeffective from "../Images/cost-effectiveness.png";

export default function Skills() {
  return (
    <div className='skills'>
        {/* <Title subtitle="لماذا رمــوز ؟"/> */}
        <h2>لماذا رمـــوز ؟</h2>
        <p style={{color:"#fff"}}>فريقنا لديه الكفاءه والخبره اللازمه لتصميم موقع بأعلي جوده من الدقه والمعايير المطلوبه التي يحتاجها العميل و سهله الاستخدام وتحقيق النجاح في تسويق المنتجات والخدمات الخاصه بمنتجاتنا </p>
    

        <div className='Skillscard'>

            <div className='skillcard1'>
                <img src={expertise} alt=''></img>
                <h3>الخبرات التقنية</h3>
                <p>لدينا فريق من المطورين ذوي الخبرة والمصممين المبدعين و مدراء المشاريع، كل منهم على دراية بمجموعة متنوعة من لغات البرمجة وتقنياتها. معًا، يحضرون أ ثروة من الخبرة والابتكار في كل مشروع، مما يضمن جودة عالية حلول عالية الجودة مصممة خصيصًا لتلبية الاحتياجات المحددة.</p>

            </div>

            <div className='skillcard1'>
                <img src={customerfocus} alt=''></img>
                <h3>التركيز علي العملاء</h3>
                <p>نحن نهتم بعملائنا، وهدفنا هو تقديم خدمات ممتازة الحلول التي تتوافق تمامًا مع احتياجات عملائنا و التوقعات. وهذا يعني أننا نحافظ على خطوط الاتصال مفتوح، وتسليم في الوقت المحدد، وتقديم الدعم المستمر و صيانة.</p>

            </div>

            <div className='skillcard1'>
                <img src={agile} alt=''></img>
                <h3>منهجية عالية</h3>
                <p>يتخذ خبراؤنا نهجًا عمليًا من خلال تحليل
المشروع في مهام صغيرة الحجم يمكننا معالجتها في فترات سرعة أقصر.
بهذه الطريقة، نبقي الأمور مرنة وجاهزة للتكيف مع أي شيء
التغييرات التي يلقيها عملاؤنا في طريقنا.</p>

            </div>

            <div className='skillcard1'>
                <img src={costeffective} alt=''></img>
                <h3>حلول فعالة من حيث التكلفة</h3>
                <p>نحن هنا لنقدم لك حلولًا صديقة للميزانية. ملكنا العروض ليست عالية الجودة فحسب، بل تراعي أيضًا احتياجاتك ميزانية. نحن نسعى للحصول على تقنيات فعالة من حيث التكلفة وتنفيذها وأساليب التطوير. بالإضافة إلى ذلك، أسعارنا واضحة و شفافة، حتى تعرف دائمًا أين تذهب أموالك.</p>

            </div>

            <div className='skillcard1'>
                <img src={goodquality} alt=''></img>
                <h3>جودة عالية</h3>
                <p>نحن جميعًا نهدف إلى تقديم عمل عالي الجودة لعملائنا. نحن
                    تأكد من أن حلولنا البرمجية خالية من الأخطاء والأخطاء.
                    لقد انتهينا من الاختبار بالكامل ونساندك في الاستمرار
                    الصيانة والدعم.</p>

            </div>

            <div className='skillcard1'>
                <img src={transparent} alt=''></img>
                <h3>الشفافية</h3>
                <p>نحن نبقي الأمور واضحة في اتصالاتنا ومشروعنا إدارة. يقدم فريقنا تحديثات منتظمة حول المشروع الحالة والتقدم وأي مشكلات تظهر. وهذا يبني الثقة ويبقي العميل على اطلاع بكل خطوة على الطريق.</p>

            </div>

        </div>
    </div>
  )
}
