require('jsdom-global')()
const assert = require('assert')

import UserLogin from "../../../components/UserLogin";
import { mount } from '@vue/test-utils'

describe("login", () => {
    let component;

    const wrapper = mount(UserLogin)

    it("should render Username Field", () => {
        expect(wrapper.find('#username').exists()).toBe(true)
    });

    it("should render Password Field", () => {
        expect(wrapper.find('#password').exists()).toBe(true)
    });

    it("should render login Button", () => {
        expect(wrapper.find('#loginBtn').exists()).toBe(true)
    });

    it("should render Register Button", () => {
        expect(wrapper.find('#registerBtn').exists()).toBe(true)
    });

    //check username and password to be empty

    it("Username should be empty", () => {
        expect(wrapper.find('#username').isEmpty()).toBe(true)
    });

    it("Password should be empty", () => {
        expect(wrapper.find('#password').isEmpty()).toBe(true)
    });

    it("Click button with empty field", async() => {
        const btn = wrapper.find('#loginBtn');
        await btn.trigger('click');
        const isUsernameSet = wrapper.vm.isUsernameSet;
        const isPasswordSet = wrapper.vm.isUsernameSet;
        expect(isUsernameSet).toBe(false)
        expect(isPasswordSet).toBe(false)
    });

    it("Click loginbutton password  field empty", async() => {

        const username = wrapper.find('#username');
        await username.setValue('mukotso');
        const btn = wrapper.find('#loginBtn');
        await btn.trigger('click');
        const isUsernameSet = wrapper.vm.isUsernameSet;
        const isPasswordSet = wrapper.vm.isPasswordSet;
        expect(isUsernameSet).toBe(true)
        expect(isPasswordSet).toBe(false)
    });


    it("Click login button when username and password filled", async() => {

        const password = wrapper.findAll('#password');
        await password.setValue('mzinga');
        const username = wrapper.findAll('#username');
        await username.setValue('mukotso');
        const btn = wrapper.findAll('#loginBtn');
        await btn.trigger('click');
        // console.log({wrapper:wrapper.vm.$data.isUsernameSet})

        const isUsernameSet = wrapper.vm.isUsernameSet;
        const isPasswordSet = wrapper.vm.isPasswordSet;
        expect(isUsernameSet).toBe(true)
        expect(isPasswordSet).toBe(true)

    });


});