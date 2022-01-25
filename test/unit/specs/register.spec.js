require('jsdom-global')()
const assert = require('assert')

import UserRegistration from "../../../components/UserRegistration";
import { mount } from '@vue/test-utils'

describe("Registration", () => {
    let component;

    const wrapper = mount(UserRegistration)

    it("should render name Field", () => {
        expect(wrapper.find('#name').exists()).toBe(true)
    });

    it("should render Password Field", () => {
        expect(wrapper.find('#password').exists()).toBe(true)
    });

    it("should render Username Field", () => {
        expect(wrapper.find('#username').exists()).toBe(true)
    });
    it("should render Address Field", () => {
        expect(wrapper.find('#address').exists()).toBe(true)
    });

    it("should render Id Number Field", () => {
        expect(wrapper.find('#id_number').exists()).toBe(true)
    });

    it("should render Login Button", () => {
        expect(wrapper.find('#btnLogin').exists()).toBe(true)
    });
    it("should render Register Button", () => {
        expect(wrapper.find('#registerBtn').exists()).toBe(true)
    });




});