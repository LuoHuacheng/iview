import setLang from '../lang';

const lang = {
    i: {
        locale: 'ar',
        select: {
            placeholder: 'يرجى الاختيار',
            noMatch: 'لا توجد بيانات متطابقة',
            loading: 'جاري التحميل'
        },
        table: {
            noDataText: 'لا توجد بيانات ',
            noFilteredDataText: 'لا يوجد نتائج الفحص',
            confirmFilter: 'فحص',
            resetFilter: 'إعادة الفحص',
            clearFilter: 'الكل'
        },
        datepicker: {
            selectDate: 'اختر التاريخ',
            selectTime: 'اختر الوقت',
            startTime: 'وقت البدء',
            endTime: 'وقت الانتهاء',
            clear: 'مسح',
            ok: 'تأكيد',
            datePanelLabel: '[yyyy年] [m月]',
            month: 'شهر',
            month1: 'يناير',
            month2: 'فبراير',
            month3: 'مارس',
            month4: 'أبريل',
            month5: 'مايو',
            month6: 'يونيو',
            month7: 'يوليو',
            month8: 'أغسطس',
            month9: 'سبتمبر',
            month10: 'أكتوبر',
            month11: 'نوفمبر',
            month12: 'ديسمبر',
            year: 'سنة',
            weekStartDay: '0',
            weeks: {
                sun: 'الأحد',
                mon: 'الإثنين',
                tue: 'الثلاثاء',
                wed: 'الأربعاء',
                thu: 'الخميس',
                fri: 'الجمعة',
                sat: 'السبت'
            },
            months: {
                m1: '1月',
                m2: '2月',
                m3: '3月',
                m4: '4月',
                m5: '5月',
                m6: '6月',
                m7: '7月',
                m8: '8月',
                m9: '9月',
                m10: '10月',
                m11: '11月',
                m12: '12月'
            }
        },
        transfer: {
            titles: {
                source: 'القائمة المصدر',
                target: 'القائمة المستهدفة'
            },
            filterPlaceholder: 'يرجى إدخال محتوى البحث',
            notFoundText: 'القائمة فارغة'
        },
        modal: {
            okText: 'تأكيد',
            cancelText: 'إلغاء'
        },
        poptip: {
            okText: 'تأكيد',
            cancelText: 'إلغاء'
        },







        page: {
            prev: '上一页',
            next: '下一页',
            total: '共',
            item: '条',
            items: '条',
            prev5: '向前 5 页',
            next5: '向后 5 页',
            page: '条/页',
            goto: '跳至',
            p: '页'
        },
        rate: {
            star: '星',
            stars: '星'
        },









        tree: {
            emptyText: 'لا توجد بيانات'
        }
    }
};

setLang(lang);

export default lang;
