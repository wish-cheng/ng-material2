import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    options: Array<any> = [{
        value: 'zhinan',
        label: '指南',
        children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
                value: 'yizhi',
                label: '一致',
            }, {
                value: 'fankui',
                label: '反馈',
            }, {
                value: 'xiaolv',
                label: '效率',
            }, {
                value: 'kekong',
                label: '可控',
            }],
        }],
    }, {
        value: 'zujian',
        label: '组件',
        children: [{
            value: 'layout',
            label: 'Layout 布局',
            children: []
        }, {
            value: 'color',
            label: 'Color 色彩',
        }, {
            value: 'typography',
            label: 'Typography 字体',
        }],
    }, {
        value: 'form',
        label: 'Form',
        children: [{
            value: 'radio',
            label: 'Radio 单选框',
        }, {
            value: 'checkbox',
            label: 'Checkbox 多选框',
        }, {
            value: 'input',
            label: 'Input 输入框',
        }, {
            value: 'input-number',
            label: 'InputNumber 计数器',
        }, {
            value: 'select',
            label: 'Select 选择器',
        }, {
            value: 'cascader',
            label: 'Cascader 级联选择器',
        }],
    }];

    changeHandle(event: { path: Array<string>, value: string }): void {
        console.log(event);
    }

}
