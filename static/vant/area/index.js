import { VantComponent } from '../common/component';
import { pickerProps } from '../picker/shared';
var COLUMNSPLACEHOLDERCODE = '000000';
VantComponent({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign(Object.assign({}, pickerProps), { value: String, areaList: {
            type: Object,
            value: {}
        }, columnsNum: {
            type: null,
            value: 3
        }, columnsPlaceholder: {
            type: Array,
            observer(val) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: val[0] || '',
                        city: val[1] || '',
                        county: val[2] || '',
                    }
                });
            }
        } }),
    data: {
        columns: [{ values: [] }, { values: [] }, { values: [] }],
        displayColumns: [{ values: [] }, { values: [] }, { values: [] }],
        typeToColumnsPlaceholder: {}
    },
    watch: {
        value(value) {
            this.code = value;
            this.setValues();
        },
        areaList: 'setValues',
        columnsNum(value) {
            this.setData({
                displayColumns: this.data.columns.slice(0, +value)
            });
        }
    },
    mounted() {
        setTimeout(() => {
            this.setValues();
        }, 0);
    },
    methods: {
        getPicker() {
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-area__picker');
            }
            return this.picker;
        },
        onCancel(event) {
            this.emit('cancel', event.detail);
        },
        onConfirm(event) {
            var { index } = event.detail;
            let { value } = event.detail;
            value = this.parseOutputValues(value);
            this.emit('confirm', { value, index });
        },
        emit(type, detail) {
            detail.values = detail.value;
            delete detail.value;
            this.$emit(type, detail);
        },
        // parse output columns data
        parseOutputValues(values) {
            var { columnsPlaceholder } = this.data;
            return values.map((value, index) => {
                // save undefined value
                if (!value)
                    return value;
                value = JSON.parse(JSON.stringify(value));
                if (!value.code || value.name === columnsPlaceholder[index]) {
                    value.code = '';
                    value.name = '';
                }
                return value;
            });
        },
        onChange(event) {
            var { index, picker, value } = event.detail;
            this.code = value[index].code;
            this.setValues().then(() => {
                this.$emit('change', {
                    picker,
                    values: this.parseOutputValues(picker.getValues()),
                    index
                });
            });
        },
        getConfig(type) {
            var { areaList } = this.data;
            return (areaList && areaList[`${type}_list`]) || {};
        },
        getList(type, code) {
            var { typeToColumnsPlaceholder } = this.data;
            let result = [];
            if (type !== 'province' && !code) {
                return result;
            }
            var list = this.getConfig(type);
            result = Object.keys(list).map(code => ({
                code,
                name: list[code]
            }));
            if (code) {
                // oversea code
                if (code[0] === '9' && type === 'city') {
                    code = '9';
                }
                result = result.filter(item => item.code.indexOf(code) === 0);
            }
            if (typeToColumnsPlaceholder[type] && result.length) {
                // set columns placeholder
                var codeFill = type === 'province' ? '' : type === 'city' ? COLUMNSPLACEHOLDERCODE.slice(2, 4) : COLUMNSPLACEHOLDERCODE.slice(4, 6);
                result.unshift({
                    code: `${code}${codeFill}`,
                    name: typeToColumnsPlaceholder[type]
                });
            }
            return result;
        },
        getIndex(type, code) {
            let compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
            var list = this.getList(type, code.slice(0, compareNum - 2));
            // oversea code
            if (code[0] === '9' && type === 'province') {
                compareNum = 1;
            }
            code = code.slice(0, compareNum);
            for (let i = 0; i < list.length; i++) {
                if (list[i].code.slice(0, compareNum) === code) {
                    return i;
                }
            }
            return 0;
        },
        setValues() {
            var county = this.getConfig('county');
            let { code } = this;
            if (!code) {
                if (this.data.columnsPlaceholder.length) {
                    code = COLUMNSPLACEHOLDERCODE;
                }
                else if (Object.keys(county)[0]) {
                    code = Object.keys(county)[0];
                }
                else {
                    code = '';
                }
            }
            var province = this.getList('province');
            var city = this.getList('city', code.slice(0, 2));
            var picker = this.getPicker();
            if (!picker) {
                return;
            }
            var stack = [];
            stack.push(picker.setColumnValues(0, province, false));
            stack.push(picker.setColumnValues(1, city, false));
            if (city.length && code.slice(2, 4) === '00') {
                [{ code }] = city;
            }
            stack.push(picker.setColumnValues(2, this.getList('county', code.slice(0, 4)), false));
            return Promise.all(stack)
                .catch(() => { })
                .then(() => picker.setIndexes([
                this.getIndex('province', code),
                this.getIndex('city', code),
                this.getIndex('county', code)
            ]))
                .catch(() => { });
        },
        getValues() {
            var picker = this.getPicker();
            return picker ? picker.getValues().filter(value => !!value) : [];
        },
        getDetail() {
            var values = this.getValues();
            var area = {
                code: '',
                country: '',
                province: '',
                city: '',
                county: ''
            };
            if (!values.length) {
                return area;
            }
            var names = values.map((item) => item.name);
            area.code = values[values.length - 1].code;
            if (area.code[0] === '9') {
                area.country = names[1] || '';
                area.province = names[2] || '';
            }
            else {
                area.province = names[0] || '';
                area.city = names[1] || '';
                area.county = names[2] || '';
            }
            return area;
        },
        reset(code) {
            this.code = code || '';
            return this.setValues();
        }
    }
});
