(self.webpackChunk = self.webpackChunk || []).push([
    ["672"], {
        36918: function() {
            function e() {
                let e = Webflow.require("ix3");
                e.ready().then(() => {
                    let a = e.getInstance();
                    a && (a.register([{
                        id: "i-755f3e53",
                        triggers: [
                            ["wf:scroll", {
                                    controlType: "scroll",
                                    scrollTriggerConfig: {
                                        clamp: !0,
                                        start: "top bottom",
                                        end: "bottom top",
                                        scrub: null,
                                        enter: "play",
                                        leave: "none",
                                        enterBack: "play",
                                        leaveBack: "none"
                                    }
                                },
                                ["wf:class", ["section-title"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ]
                        ],
                        timelineIds: ["t-d6526f85"],
                        deleted: !1
                    }, {
                        id: "i-838eba56",
                        triggers: [
                            ["wf:load", {
                                controlType: "load"
                            }]
                        ],
                        timelineIds: ["t-cbacfc52"],
                        deleted: !1
                    }], [{
                        id: "t-d6526f85",
                        deleted: !1,
                        actions: [{
                            id: "ta-d12a4ed6",
                            targets: [
                                ["wf:trigger-only", "", {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    amount: .2
                                }
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", "0px"]
                                }
                            },
                            splitText: {
                                type: "chars",
                                mask: "chars"
                            }
                        }]
                    }, {
                        id: "t-cbacfc52",
                        deleted: !1,
                        actions: [{
                            id: "ta-4aaa280b",
                            targets: [
                                ["wf:class", ["first-heading"], {
                                    relationship: "none",
                                    firstMatchOnly: !1
                                }]
                            ],
                            timing: {
                                position: 0,
                                stagger: {
                                    amount: .3
                                }
                            },
                            tt: 2,
                            properties: {
                                "wf:transform": {
                                    y: ["100%", "0%"]
                                }
                            },
                            splitText: {
                                type: "words",
                                mask: "words"
                            }
                        }]
                    }]), window.dispatchEvent(new CustomEvent("__wf_ix3_ready")), document.documentElement.classList.add("w-mod-ix3"))
                })
            }
            Webflow.require("ix2").init({
                events: {
                    "e-53": {
                        id: "e-53",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-89"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "dcfedaf9-63bf-4ce2-e1ff-4f22990e0ecb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "dcfedaf9-63bf-4ce2-e1ff-4f22990e0ecb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x194ca07b4d7
                    },
                    "e-59": {
                        id: "e-59",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-60"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "3d3968c7-f730-b905-796a-b7009631ab47",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "3d3968c7-f730-b905-796a-b7009631ab47",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x194ca23ff12
                    },
                    "e-65": {
                        id: "e-65",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-66"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".badge-text",
                            originalId: "68fbd33cd97f330ee31625cf|5f5f1b93-3e98-618b-33a4-28184c06e4f6",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".badge-text",
                            originalId: "68fbd33cd97f330ee31625cf|5f5f1b93-3e98-618b-33a4-28184c06e4f6",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x194caa2a45a
                    },
                    "e-67": {
                        id: "e-67",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-68"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".badge-horizontal-line",
                            originalId: "68fbd33cd97f330ee31625cf|65261c7d-494a-003c-a3e1-4ff87d852c34",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".badge-horizontal-line",
                            originalId: "68fbd33cd97f330ee31625cf|65261c7d-494a-003c-a3e1-4ff87d852c34",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x194caa2c5a9
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-86"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "10d56172-1313-fc8c-0d17-726ce7a60e57",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "10d56172-1313-fc8c-0d17-726ce7a60e57",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x193d2b2f687
                    },
                    "e-177": {
                        id: "e-177",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-178"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "e9b3483a-6a3b-79df-da2c-79382331a4e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e9b3483a-6a3b-79df-da2c-79382331a4e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-179": {
                        id: "e-179",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-180"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "e9b3483a-6a3b-79df-da2c-79382331a4e3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e9b3483a-6a3b-79df-da2c-79382331a4e3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-181": {
                        id: "e-181",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-182"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92b1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92b1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-183": {
                        id: "e-183",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-184"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92b4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92b4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-189": {
                        id: "e-189",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-190"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92d2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92d2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-195": {
                        id: "e-195",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-196"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92f0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e92f0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-201": {
                        id: "e-201",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-202"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e930e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e930e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-217": {
                        id: "e-217",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-218"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e9368",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e9368",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 50,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-219": {
                        id: "e-219",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-220"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e936a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|5e5b9c04-a22b-8097-f07f-0598ce5e936a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19564bff665
                    },
                    "e-229": {
                        id: "e-229",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-13",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-264"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".accordions",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".accordions",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19540be8f02
                    },
                    "e-230": {
                        id: "e-230",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-263"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".accordions",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".accordions",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19540be8f03
                    },
                    "e-237": {
                        id: "e-237",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-238"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "981e7244-d3eb-8000-5d0e-58bf3b0284e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "981e7244-d3eb-8000-5d0e-58bf3b0284e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x195653fc7de
                    },
                    "e-241": {
                        id: "e-241",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-242"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "981e7244-d3eb-8000-5d0e-58bf3b0284e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "981e7244-d3eb-8000-5d0e-58bf3b0284e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x195653fc7de
                    },
                    "e-247": {
                        id: "e-247",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-248"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "1747d6d2-e9e6-4ac7-537a-831d2e211ac9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "1747d6d2-e9e6-4ac7-537a-831d2e211ac9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x195653fc7de
                    },
                    "e-263": {
                        id: "e-263",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-13",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-264"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".accordion",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".accordion",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19540be8f02
                    },
                    "e-264": {
                        id: "e-264",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-263"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".accordion",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".accordion",
                            originalId: "6ef7d17e-d6c0-44e5-394c-0851a3f82af8",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19540be8f03
                    },
                    "e-269": {
                        id: "e-269",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-270"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d2|c9325c2c-969c-db54-cc8e-e98946c82dbe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d2|c9325c2c-969c-db54-cc8e-e98946c82dbe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19661dbfa17
                    },
                    "e-311": {
                        id: "e-311",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-312"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".sub-title",
                            originalId: "68a0aea8a4d9b4e69500ccbb|4aa39544-8cfa-dfa2-0919-7eea4f716739",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".sub-title",
                            originalId: "68a0aea8a4d9b4e69500ccbb|4aa39544-8cfa-dfa2-0919-7eea4f716739",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198f6360921
                    },
                    "e-313": {
                        id: "e-313",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-314"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".heading-6",
                            originalId: "68abf62aecc5e406c203f247|4c53bb05-7814-1cfc-b37e-7bc6705260b1",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".heading-6",
                            originalId: "68abf62aecc5e406c203f247|4c53bb05-7814-1cfc-b37e-7bc6705260b1",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198f6e4dbd9
                    },
                    "e-317": {
                        id: "e-317",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-318"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".utility-tect-block",
                            originalId: "68fbd33cd97f330ee31625cd|c7b3d015-10db-9b9e-def0-3e2e5929f793",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".utility-tect-block",
                            originalId: "68fbd33cd97f330ee31625cd|c7b3d015-10db-9b9e-def0-3e2e5929f793",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198f709ccf8
                    },
                    "e-321": {
                        id: "e-321",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-322"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".navbar",
                            originalId: "da291863-ab22-6c3f-bdb7-3871186c46e0",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navbar",
                            originalId: "da291863-ab22-6c3f-bdb7-3871186c46e0",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198e08b1363
                    },
                    "e-322": {
                        id: "e-322",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-321"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".navbar",
                            originalId: "da291863-ab22-6c3f-bdb7-3871186c46e0",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navbar",
                            originalId: "da291863-ab22-6c3f-bdb7-3871186c46e0",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198e08b1364
                    },
                    "e-323": {
                        id: "e-323",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-324"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198eb375c02
                    },
                    "e-324": {
                        id: "e-324",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-323"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198eb375c03
                    },
                    "e-325": {
                        id: "e-325",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-326"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198eb37b420
                    },
                    "e-326": {
                        id: "e-326",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-325"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "da291863-ab22-6c3f-bdb7-3871186c46e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198eb37b421
                    },
                    "e-327": {
                        id: "e-327",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-36",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-328"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button-3",
                            originalId: "eb4f1b8a-e10e-1c19-7902-1a68d8a33c58",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-3",
                            originalId: "eb4f1b8a-e10e-1c19-7902-1a68d8a33c58",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198eb19f1ba
                    },
                    "e-328": {
                        id: "e-328",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-37",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-327"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button-3",
                            originalId: "eb4f1b8a-e10e-1c19-7902-1a68d8a33c58",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-3",
                            originalId: "eb4f1b8a-e10e-1c19-7902-1a68d8a33c58",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198eb19f1bb
                    },
                    "e-334": {
                        id: "e-334",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-38",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-329"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".utility-text-wrap",
                            originalId: "689cabcae83887fccfbbebb4|a9379098-85a6-2315-060a-54961950e3fa",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".utility-text-wrap",
                            originalId: "689cabcae83887fccfbbebb4|a9379098-85a6-2315-060a-54961950e3fa",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19904c196fd
                    },
                    "e-355": {
                        id: "e-355",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-72",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|deac298c-f770-c073-bebc-c46bb760f74f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|deac298c-f770-c073-bebc-c46bb760f74f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-72-p",
                            smoothing: 95,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a453670a3
                    },
                    "e-356": {
                        id: "e-356",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-43",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-357"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|54e08dc7-6a18-e422-9c71-c7376bc1b229",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|54e08dc7-6a18-e422-9c71-c7376bc1b229",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a45af6a7e
                    },
                    "e-358": {
                        id: "e-358",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-359"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".pricing-card",
                            originalId: "68f8f52227ea72338f19f8e9|10af0612-1861-bedc-08ea-c40988b72de2",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".pricing-card",
                            originalId: "68f8f52227ea72338f19f8e9|10af0612-1861-bedc-08ea-c40988b72de2",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a35da565e
                    },
                    "e-360": {
                        id: "e-360",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-361"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button",
                            originalId: "a7bdef37-e37b-3a36-322a-f5b03a8450c5",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button",
                            originalId: "a7bdef37-e37b-3a36-322a-f5b03a8450c5",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1992cc21743
                    },
                    "e-361": {
                        id: "e-361",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-45",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-360"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button",
                            originalId: "a7bdef37-e37b-3a36-322a-f5b03a8450c5",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button",
                            originalId: "a7bdef37-e37b-3a36-322a-f5b03a8450c5",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1992cc21744
                    },
                    "e-362": {
                        id: "e-362",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-36",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-363"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button-primary",
                            originalId: "992dd832-d9b4-2242-36c0-0711b98835ce",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-primary",
                            originalId: "992dd832-d9b4-2242-36c0-0711b98835ce",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199fb586a6a
                    },
                    "e-363": {
                        id: "e-363",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-37",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-362"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".button-primary",
                            originalId: "992dd832-d9b4-2242-36c0-0711b98835ce",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-primary",
                            originalId: "992dd832-d9b4-2242-36c0-0711b98835ce",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199fb586a6a
                    },
                    "e-364": {
                        id: "e-364",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-48",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-365"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "21ff05b8-1bc0-7d37-f024-0f7b048be6bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "21ff05b8-1bc0-7d37-f024-0f7b048be6bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4ae8e1a9
                    },
                    "e-365": {
                        id: "e-365",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-364"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "21ff05b8-1bc0-7d37-f024-0f7b048be6bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "21ff05b8-1bc0-7d37-f024-0f7b048be6bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4ae8e1aa
                    },
                    "e-370": {
                        id: "e-370",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-371"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d2|d5f40e78-31a7-c007-3b7d-26efbbeacf0a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d2|d5f40e78-31a7-c007-3b7d-26efbbeacf0a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x195bd451f40
                    },
                    "e-372": {
                        id: "e-372",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-373"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".utility-content-wrapper",
                            originalId: "68fbd33cd97f330ee31625d2|b22e7717-90cb-5f66-4f44-4959aa80581d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".utility-content-wrapper",
                            originalId: "68fbd33cd97f330ee31625d2|b22e7717-90cb-5f66-4f44-4959aa80581d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199fcae3e1d
                    },
                    "e-374": {
                        id: "e-374",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-375"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d2|ecd57e8b-3263-96d2-0864-701e9eec6388",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d2|ecd57e8b-3263-96d2-0864-701e9eec6388",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b39941b
                    },
                    "e-376": {
                        id: "e-376",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-377"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d3|394703ae-f5fd-e3d5-9156-7b645163694f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d3|394703ae-f5fd-e3d5-9156-7b645163694f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b41eff0
                    },
                    "e-378": {
                        id: "e-378",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-379"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d3|394703ae-f5fd-e3d5-9156-7b645163696a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d3|394703ae-f5fd-e3d5-9156-7b645163696a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b41eff0
                    },
                    "e-380": {
                        id: "e-380",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-381"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|47a90d68-6096-bca8-51a2-0daa784e7174",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|47a90d68-6096-bca8-51a2-0daa784e7174",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b442a0e
                    },
                    "e-382": {
                        id: "e-382",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-383"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|47a90d68-6096-bca8-51a2-0daa784e718f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|47a90d68-6096-bca8-51a2-0daa784e718f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b442a0e
                    },
                    "e-384": {
                        id: "e-384",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-385"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97222d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97222d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 50,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b44f3bf
                    },
                    "e-386": {
                        id: "e-386",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-387"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c972236",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c972236",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 50,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b44f3bf
                    },
                    "e-388": {
                        id: "e-388",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-389"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97223e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97223e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 50,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b44f3bf
                    },
                    "e-390": {
                        id: "e-390",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-391"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97224a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97224a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 50,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b44f3bf
                    },
                    "e-396": {
                        id: "e-396",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-397"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97229c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|c3a1fc40-c1d3-3e4f-567b-c0335c97229c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 50,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b44f3bf
                    },
                    "e-398": {
                        id: "e-398",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-399"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d1|b877a52a-ea72-7299-4a71-d4a167c5f7a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d1|b877a52a-ea72-7299-4a71-d4a167c5f7a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b4912d0
                    },
                    "e-400": {
                        id: "e-400",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-401"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d1|b877a52a-ea72-7299-4a71-d4a167c5f7c0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d1|b877a52a-ea72-7299-4a71-d4a167c5f7c0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a4b4912d0
                    },
                    "e-406": {
                        id: "e-406",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b2948",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b2948",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a4cee1c6a
                    },
                    "e-407": {
                        id: "e-407",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a4d0cb06a
                    },
                    "e-408": {
                        id: "e-408",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-409"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|ec340937-0f02-65a8-f750-ac4f10141f9e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|ec340937-0f02-65a8-f750-ac4f10141f9e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4d7ed74c
                    },
                    "e-410": {
                        id: "e-410",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-54",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|7e36497e-c810-90d8-ccdc-37ad2ab6d496",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|7e36497e-c810-90d8-ccdc-37ad2ab6d496",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-54-p",
                            smoothing: 95,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a4d83f910
                    },
                    "e-411": {
                        id: "e-411",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-55",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|e02d0d0c-4106-b188-0342-ff434e5ba078",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|e02d0d0c-4106-b188-0342-ff434e5ba078",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-55-p",
                            smoothing: 95,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a4d8f5fcf
                    },
                    "e-412": {
                        id: "e-412",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-413"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28f9|5f811fdb-1c97-453b-309a-3daf4ad0b86d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28f9|5f811fdb-1c97-453b-309a-3daf4ad0b86d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e546722
                    },
                    "e-414": {
                        id: "e-414",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-415"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cd3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cd3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e54c189
                    },
                    "e-416": {
                        id: "e-416",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-417"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cb5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cb5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e54dda5
                    },
                    "e-418": {
                        id: "e-418",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-419"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e54fa28
                    },
                    "e-420": {
                        id: "e-420",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-421"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28f9|474e213a-d367-68bc-0190-869f11718cce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e551530
                    },
                    "e-422": {
                        id: "e-422",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-423"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "981e7244-d3eb-8000-5d0e-58bf3b0284dd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "981e7244-d3eb-8000-5d0e-58bf3b0284dd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e55625f
                    },
                    "e-426": {
                        id: "e-426",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-427"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".section-title-wrap",
                            originalId: "68fbd33cd97f330ee31625ca|588f258c-65a2-0ce3-615e-7e8f826ba1d8",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".section-title-wrap",
                            originalId: "68fbd33cd97f330ee31625ca|588f258c-65a2-0ce3-615e-7e8f826ba1d8",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e7c2527
                    },
                    "e-428": {
                        id: "e-428",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-429"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|626a7ea6-e08a-c2fd-78e6-ca3853b395ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|626a7ea6-e08a-c2fd-78e6-ca3853b395ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e7c4b38
                    },
                    "e-430": {
                        id: "e-430",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-431"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|3f044ece-b736-049a-3c94-84c921b5cbcf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|3f044ece-b736-049a-3c94-84c921b5cbcf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e7c6463
                    },
                    "e-432": {
                        id: "e-432",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-433"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".feature-card-small",
                            originalId: "68fbd33cd97f330ee31625ca|65b44aab-b38c-c669-5db8-d9ad55b8ccef",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".feature-card-small",
                            originalId: "68fbd33cd97f330ee31625ca|65b44aab-b38c-c669-5db8-d9ad55b8ccef",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e7ca284
                    },
                    "e-434": {
                        id: "e-434",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-435"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|664d60e8-721a-1ff8-a753-c54e7b362d23",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|664d60e8-721a-1ff8-a753-c54e7b362d23",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e7cc1ce
                    },
                    "e-436": {
                        id: "e-436",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-437"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89077",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89077",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e7dbf56
                    },
                    "e-438": {
                        id: "e-438",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-439"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|54e08dc7-6a18-e422-9c71-c7376bc1b229",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|54e08dc7-6a18-e422-9c71-c7376bc1b229",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a4e7df49d
                    },
                    "e-440": {
                        id: "e-440",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a4e96048e
                    },
                    "e-441": {
                        id: "e-441",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-58",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50af8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50af8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-58-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a4e9951fa
                    },
                    "e-442": {
                        id: "e-442",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-443"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|caadd994-59d3-eefe-6935-7e3d9abea3ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|caadd994-59d3-eefe-6935-7e3d9abea3ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a50140b35
                    },
                    "e-444": {
                        id: "e-444",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-60",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-445"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a528199fb
                    },
                    "e-446": {
                        id: "e-446",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-61",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-447"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|4aabfb0b-f032-adee-4353-661ccad58389",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|4aabfb0b-f032-adee-4353-661ccad58389",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5284a500
                    },
                    "e-448": {
                        id: "e-448",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-62",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-449"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|624d9393-4d68-8c6c-4258-31db253fc290",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|624d9393-4d68-8c6c-4258-31db253fc290",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a528b78c8
                    },
                    "e-450": {
                        id: "e-450",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-451"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|cb9f8251-c3b5-d721-db86-bd61336e3f12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|cb9f8251-c3b5-d721-db86-bd61336e3f12",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5291abd8
                    },
                    "e-452": {
                        id: "e-452",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-453"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|2904b3d8-f173-5249-a3a5-e0cbc8ea6d32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|2904b3d8-f173-5249-a3a5-e0cbc8ea6d32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a52a1131f
                    },
                    "e-454": {
                        id: "e-454",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a52bad571
                    },
                    "e-455": {
                        id: "e-455",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-65",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-456"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "2547e836-d71e-6a4b-b3b2-0aca5c390998",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "2547e836-d71e-6a4b-b3b2-0aca5c390998",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a52c94f60
                    },
                    "e-456": {
                        id: "e-456",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-455"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "2547e836-d71e-6a4b-b3b2-0aca5c390998",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "2547e836-d71e-6a4b-b3b2-0aca5c390998",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a52c94f61
                    },
                    "e-457": {
                        id: "e-457",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-458"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".section-title-block",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6741",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".section-title-block",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6741",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53227079
                    },
                    "e-459": {
                        id: "e-459",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-460"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6692",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6692",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5323107f
                    },
                    "e-461": {
                        id: "e-461",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-462"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b4e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b4e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a532bb0a1
                    },
                    "e-463": {
                        id: "e-463",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-464"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50ae4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50ae4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53509626
                    },
                    "e-465": {
                        id: "e-465",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-466"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ce|fcac32ea-4400-a798-c566-9069e36e1451",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ce|fcac32ea-4400-a798-c566-9069e36e1451",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53572f84
                    },
                    "e-467": {
                        id: "e-467",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-468"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ce|fcac32ea-4400-a798-c566-9069e36e1466",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ce|fcac32ea-4400-a798-c566-9069e36e1466",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5357439c
                    },
                    "e-469": {
                        id: "e-469",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-470"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "59156094-dc6c-7b99-dd78-37290d8fede0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "59156094-dc6c-7b99-dd78-37290d8fede0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53576ecc
                    },
                    "e-471": {
                        id: "e-471",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-472"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "5cf55d76-0374-7b55-becb-64aad10aecdc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "5cf55d76-0374-7b55-becb-64aad10aecdc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5357999c
                    },
                    "e-473": {
                        id: "e-473",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-474"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd4cee42ead3b694b0e08|e9469f0b-b71d-5946-df87-d9fb4859093e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd4cee42ead3b694b0e08|e9469f0b-b71d-5946-df87-d9fb4859093e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5358c078
                    },
                    "e-475": {
                        id: "e-475",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-476"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd4cee42ead3b694b0e08|6758f1d9-98bd-373c-d061-2878a06d104c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd4cee42ead3b694b0e08|6758f1d9-98bd-373c-d061-2878a06d104c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5358f278
                    },
                    "e-477": {
                        id: "e-477",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-478"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "21ff05b8-1bc0-7d37-f024-0f7b048be6bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "21ff05b8-1bc0-7d37-f024-0f7b048be6bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5359af5c
                    },
                    "e-479": {
                        id: "e-479",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd4d8d9484772a6c89980",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd4d8d9484772a6c89980",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a535a2827
                    },
                    "e-480": {
                        id: "e-480",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-481"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d1|b877a52a-ea72-7299-4a71-d4a167c5f7a3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d1|b877a52a-ea72-7299-4a71-d4a167c5f7a3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535ab418
                    },
                    "e-482": {
                        id: "e-482",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-483"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".sg-content-wrapper",
                            originalId: "68fbd33cd97f330ee31625d1|d6b52bc3-8ca0-72be-715e-518f159c4414",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".sg-content-wrapper",
                            originalId: "68fbd33cd97f330ee31625d1|d6b52bc3-8ca0-72be-715e-518f159c4414",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535accd8
                    },
                    "e-484": {
                        id: "e-484",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-485"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d2|16a7f826-0ac5-be02-8160-946e8a2f2d67",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d2|16a7f826-0ac5-be02-8160-946e8a2f2d67",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535b460f
                    },
                    "e-486": {
                        id: "e-486",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a535b7c13
                    },
                    "e-487": {
                        id: "e-487",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-488"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d3|394703ae-f5fd-e3d5-9156-7b645163694d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d3|394703ae-f5fd-e3d5-9156-7b645163694d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535be2cf
                    },
                    "e-489": {
                        id: "e-489",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-490"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d3|35124cb3-ad5f-a58b-86a2-49a92e7f9ef5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d3|35124cb3-ad5f-a58b-86a2-49a92e7f9ef5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535c118d
                    },
                    "e-491": {
                        id: "e-491",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-492"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d5|47a90d68-6096-bca8-51a2-0daa784e7172",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d5|47a90d68-6096-bca8-51a2-0daa784e7172",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535c985f
                    },
                    "e-493": {
                        id: "e-493",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-494"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d6|c70f5aba-112f-786e-6cbe-42ccbe362a03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d6|c70f5aba-112f-786e-6cbe-42ccbe362a03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535d1560
                    },
                    "e-495": {
                        id: "e-495",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-496"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d6|c90bb9d5-bdc8-2f90-cfaa-41494527bae5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d6|c90bb9d5-bdc8-2f90-cfaa-41494527bae5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535d3a7d
                    },
                    "e-497": {
                        id: "e-497",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-498"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d6|b2edfaf5-5610-6fa6-fca3-99136ae18de4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d6|b2edfaf5-5610-6fa6-fca3-99136ae18de4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535d7567
                    },
                    "e-499": {
                        id: "e-499",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-500"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d6|1ed751a4-bf67-b7c8-59a6-e54775341bb7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d6|1ed751a4-bf67-b7c8-59a6-e54775341bb7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a535d90e6
                    },
                    "e-501": {
                        id: "e-501",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a5360cdb0
                    },
                    "e-502": {
                        id: "e-502",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28f9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28f9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a536153b0
                    },
                    "e-503": {
                        id: "e-503",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-504"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|8dc3672a-9df3-28f8-d6ee-e76dd2bf3a76",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|8dc3672a-9df3-28f8-d6ee-e76dd2bf3a76",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5363a0d7
                    },
                    "e-505": {
                        id: "e-505",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-506"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|8adbd2d3-575e-8f56-c858-72aac311f910",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|8adbd2d3-575e-8f56-c858-72aac311f910",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5363bf55
                    },
                    "e-509": {
                        id: "e-509",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-510"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf|cfe0d809-4884-df37-fabf-2ca153b9267b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf|cfe0d809-4884-df37-fabf-2ca153b9267b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5365c6f4
                    },
                    "e-511": {
                        id: "e-511",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-512"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf|149c9cbe-f51f-f705-4677-83fc312e402d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf|149c9cbe-f51f-f705-4677-83fc312e402d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5365e46d
                    },
                    "e-513": {
                        id: "e-513",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-514"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf|40256044-228a-1cb0-9830-f6eff75156e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf|40256044-228a-1cb0-9830-f6eff75156e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53660064
                    },
                    "e-515": {
                        id: "e-515",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-516"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".about-banner-statistic",
                            originalId: "68fbd33cd97f330ee31625cf|ff7a2628-9a58-f156-7fc9-567a90d7e9bb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".about-banner-statistic",
                            originalId: "68fbd33cd97f330ee31625cf|ff7a2628-9a58-f156-7fc9-567a90d7e9bb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53662244
                    },
                    "e-517": {
                        id: "e-517",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-518"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".stats-card",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6644",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".stats-card",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6644",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5366d338
                    },
                    "e-519": {
                        id: "e-519",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-520"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec664e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec664e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5366f8b8
                    },
                    "e-521": {
                        id: "e-521",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-522"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".success-card",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec665f",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".success-card",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec665f",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53671404
                    },
                    "e-523": {
                        id: "e-523",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-524"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec665e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec665e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a536732b9
                    },
                    "e-525": {
                        id: "e-525",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-526"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "2547e836-d71e-6a4b-b3b2-0aca5c390998",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "2547e836-d71e-6a4b-b3b2-0aca5c390998",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53676030
                    },
                    "e-527": {
                        id: "e-527",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-528"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".partner-logo-wrap",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec672c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".partner-logo-wrap",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec672c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5367a955
                    },
                    "e-529": {
                        id: "e-529",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-530"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".location-widget",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec674c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".location-widget",
                            originalId: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec674c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a5367eaad
                    },
                    "e-531": {
                        id: "e-531",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-532"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6762",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cf|4db6fce0-9b96-04a4-6279-50f64bec6762",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53680d4c
                    },
                    "e-533": {
                        id: "e-533",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd4cee42ead3b694b0e08",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd4cee42ead3b694b0e08",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a536d73e0
                    },
                    "e-534": {
                        id: "e-534",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-535"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd4d8d9484772a6c89980|87a0e131-c5d1-4436-333c-61968cd88e89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd4d8d9484772a6c89980|87a0e131-c5d1-4436-333c-61968cd88e89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a536e29a5
                    },
                    "e-536": {
                        id: "e-536",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-537"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b40",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b40",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a537007fe
                    },
                    "e-538": {
                        id: "e-538",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-68",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|664d60e8-721a-1ff8-a753-c54e7b362d23",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|664d60e8-721a-1ff8-a753-c54e7b362d23",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-68-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-68-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 50,
                            restingState: 50
                        }],
                        createdOn: 0x19a538d3789
                    },
                    "e-539": {
                        id: "e-539",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-69",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50ae2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50ae2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-69-p",
                            smoothing: 95,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a53935f8b
                    },
                    "e-540": {
                        id: "e-540",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-541"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|dc5012c8-6a15-d16e-ea7a-c195c6d5b8c8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|dc5012c8-6a15-d16e-ea7a-c195c6d5b8c8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53972dc5
                    },
                    "e-542": {
                        id: "e-542",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-543"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b62",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b62",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a539745a5
                    },
                    "e-544": {
                        id: "e-544",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-545"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b6a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b6a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53976688
                    },
                    "e-546": {
                        id: "e-546",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ce",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ce",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a539fc4f8
                    },
                    "e-547": {
                        id: "e-547",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b292b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b292b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a53ac529a
                    },
                    "e-548": {
                        id: "e-548",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b2938",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b2938",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a53acb4ff
                    },
                    "e-549": {
                        id: "e-549",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d7",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a53ad4a17
                    },
                    "e-550": {
                        id: "e-550",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625d0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625d0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a53ad8a09
                    },
                    "e-551": {
                        id: "e-551",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-552"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|f9ff0724-e3cd-e47f-1a51-895afb246e8f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|f9ff0724-e3cd-e47f-1a51-895afb246e8f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a53e71de2
                    },
                    "e-553": {
                        id: "e-553",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-71",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|07c574e7-62dd-b31a-e61b-0d6c3dc61638",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|07c574e7-62dd-b31a-e61b-0d6c3dc61638",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-71-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a592f30e3
                    },
                    "e-554": {
                        id: "e-554",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-27",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-555"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28d6|8a04ab83-7ab8-f7ab-c511-f5d827c28740",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28d6|8a04ab83-7ab8-f7ab-c511-f5d827c28740",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a67df5837
                    },
                    "e-556": {
                        id: "e-556",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-28",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-557"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6909127192e7f415ff2b28d6|8a04ab83-7ab8-f7ab-c511-f5d827c28742",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6909127192e7f415ff2b28d6|8a04ab83-7ab8-f7ab-c511-f5d827c28742",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a67df5837
                    },
                    "e-558": {
                        id: "e-558",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-559"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a9dcef433
                    },
                    "e-560": {
                        id: "e-560",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-41",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-561"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca8c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca8c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a9dcef433
                    },
                    "e-562": {
                        id: "e-562",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-563"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca8d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca8d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a9dcef433
                    },
                    "e-564": {
                        id: "e-564",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-565"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca96",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca96",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a9dcef433
                    },
                    "e-566": {
                        id: "e-566",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-567"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca9f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|62f35b72-b6ab-d472-f36d-52c524b0ca9f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a9dcef433
                    },
                    "e-568": {
                        id: "e-568",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-69",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|a141ab85-4f8c-9823-7354-32940de3f294",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|a141ab85-4f8c-9823-7354-32940de3f294",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-69-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19aa25a8951
                    },
                    "e-569": {
                        id: "e-569",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-42",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "tiny"],
                        target: {
                            id: "68fbd33cd97f330ee31625ca|deac298c-f770-c073-bebc-c46bb760f74f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68fbd33cd97f330ee31625ca|deac298c-f770-c073-bebc-c46bb760f74f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-42-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19afe813a2a
                    }
                },
                actionLists: {
                    "a-13": {
                        id: "a-13",
                        title: "Accordion Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-13-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".accordion-description-wrap",
                                        selectorGuids: ["fb6be455-4c53-823f-1ebc-30599674b7cd"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-13-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".accordion-description-wrap",
                                        selectorGuids: ["fb6be455-4c53-823f-1ebc-30599674b7cd"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-13-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".accordion-icon-wrapper",
                                        selectorGuids: ["fb6be455-4c53-823f-1ebc-30599674b7d0"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19540bec83f
                    },
                    "a-14": {
                        id: "a-14",
                        title: "Accordion Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-14-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".accordion-description-wrap",
                                        selectorGuids: ["fb6be455-4c53-823f-1ebc-30599674b7cd"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-14-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".accordion-icon-wrapper",
                                        selectorGuids: ["fb6be455-4c53-823f-1ebc-30599674b7d0"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19540bec83f
                    },
                    "a-27": {
                        id: "a-27",
                        title: "Fade In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-27-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-2",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-27-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-27-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-27-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-27-n-6",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x198a90bfc4e
                    },
                    "a-28": {
                        id: "a-28",
                        title: "Fade In 0.2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-28-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-28-n-2",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-28-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-28-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-28-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-28-n-6",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x198a90bfc4e
                    },
                    "a-29": {
                        id: "a-29",
                        title: "Fade In 0.4",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-29-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-29-n-2",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-29-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-29-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 400,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-29-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 400,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-29-n-6",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 600,
                                    easing: "",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x198a90bfc4e
                    },
                    "a-30": {
                        id: "a-30",
                        title: "Navbar Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-30-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-middle",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edd5"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-30-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-bottom",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edcb"]
                                    },
                                    yValue: -8,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-bottom",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edcb"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-30-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-top",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edd6"]
                                    },
                                    yValue: 8,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-top",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edd6"]
                                    },
                                    zValue: -45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x198e08b726f
                    },
                    "a-31": {
                        id: "a-31",
                        title: "Navbar Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-31-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-middle",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edd5"]
                                    },
                                    widthValue: 24,
                                    widthUnit: "px",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-31-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-bottom",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edcb"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-31-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-bottom",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edcb"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-31-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-top",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edd6"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-31-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hamburger-line-top",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edd6"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x198e08b726f
                    },
                    "a-32": {
                        id: "a-32",
                        title: "Nav Dropdown Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-32-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-32-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-32-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-32-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edda"]
                                    },
                                    zValue: -180,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-32-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    value: "block"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x193440c4609
                    },
                    "a-33": {
                        id: "a-33",
                        title: "Nav Dropdown Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-33-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-33-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edda"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-33-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-33-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 300,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x193440da032
                    },
                    "a-34": {
                        id: "a-34",
                        title: "Mobile Nav Dropdown Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-34-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-34-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    widthUnit: "PX",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19386bf4cd4
                    },
                    "a-35": {
                        id: "a-35",
                        title: "Mobile Nav Dropdown Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-35-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-list",
                                        selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6eddd"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19386bf4cd4
                    },
                    "a-36": {
                        id: "a-36",
                        title: "Button Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-36-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 0,
                                    target: {
                                        id: "34822190-8364-fe73-f44d-fb61db3d5fe7"
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-36-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 700,
                                    target: {
                                        id: "34822190-8364-fe73-f44d-fb61db3d5fe7"
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b630f31c4
                    },
                    "a-37": {
                        id: "a-37",
                        title: "Button Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-37-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 0,
                                    target: {
                                        id: "34822190-8364-fe73-f44d-fb61db3d5fe7"
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-37-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 700,
                                    target: {
                                        id: "34822190-8364-fe73-f44d-fb61db3d5fe7"
                                    },
                                    xValue: 0,
                                    yValue: -100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b630f31c4
                    },
                    "a-38": {
                        id: "a-38",
                        title: "Fade In 0.2S",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-38-n",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "689cabcae83887fccfbbebac|5f591560-17dc-9899-a8e8-0a9f94079121"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "592b",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-38-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "689cabcae83887fccfbbebac|5f591560-17dc-9899-a8e8-0a9f94079121"
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-38-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "689cabcae83887fccfbbebac|5f591560-17dc-9899-a8e8-0a9f94079121"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-38-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "689cabcae83887fccfbbebac|5f591560-17dc-9899-a8e8-0a9f94079121"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-38-n-5",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 200,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "689cabcae83887fccfbbebac|5f591560-17dc-9899-a8e8-0a9f94079121"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "592b",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-38-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "689cabcae83887fccfbbebac|5f591560-17dc-9899-a8e8-0a9f94079121"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x198f0eac789
                    },
                    "a-72": {
                        id: "a-72",
                        title: "Ready Made Scrolling (Mobile)",
                        continuousParameterGroups: [{
                            id: "a-72-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 15,
                                actionItems: [{
                                    id: "a-72-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-bg",
                                            selectorGuids: ["b7e1060a-cc1d-8cd3-6b99-817cdefcf0c9"]
                                        },
                                        widthValue: 20,
                                        heightValue: 25,
                                        widthUnit: "%",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 21,
                                actionItems: [{
                                    id: "a-72-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-bg",
                                            selectorGuids: ["b7e1060a-cc1d-8cd3-6b99-817cdefcf0c9"]
                                        },
                                        widthValue: 20,
                                        heightValue: 25,
                                        widthUnit: "%",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-72-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-bg",
                                            selectorGuids: ["b7e1060a-cc1d-8cd3-6b99-817cdefcf0c9"]
                                        },
                                        widthValue: 100,
                                        heightValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a45367c87
                    },
                    "a-43": {
                        id: "a-43",
                        title: "Testimonial Marquee",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-43-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial-card-row.right",
                                        selectorGuids: ["4a8de462-0a52-c176-66e9-463f6eacff23", "54e66b93-998d-a9a7-f080-c39f4d844630"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-43-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e4,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial-card-row.left",
                                        selectorGuids: ["4a8de462-0a52-c176-66e9-463f6eacff23", "dcb09467-123d-82df-da2b-dd8b4e68a4a7"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e4,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial-card-row.right",
                                        selectorGuids: ["4a8de462-0a52-c176-66e9-463f6eacff23", "54e66b93-998d-a9a7-f080-c39f4d844630"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-43-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial-card-row.left",
                                        selectorGuids: ["4a8de462-0a52-c176-66e9-463f6eacff23", "dcb09467-123d-82df-da2b-dd8b4e68a4a7"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".testimonial-card-row.right",
                                        selectorGuids: ["4a8de462-0a52-c176-66e9-463f6eacff23", "54e66b93-998d-a9a7-f080-c39f4d844630"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a45afa094
                    },
                    "a-44": {
                        id: "a-44",
                        title: "Button Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-secondary-hover-bg",
                                        selectorGuids: ["e7a205d8-1456-50e6-2a3f-7850d49f67d2"]
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-44-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 700,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-secondary-hover-bg",
                                        selectorGuids: ["e7a205d8-1456-50e6-2a3f-7850d49f67d2"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b630f31c4
                    },
                    "a-45": {
                        id: "a-45",
                        title: "Button Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-45-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-secondary-hover-bg",
                                        selectorGuids: ["e7a205d8-1456-50e6-2a3f-7850d49f67d2"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-45-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 700,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-secondary-hover-bg",
                                        selectorGuids: ["e7a205d8-1456-50e6-2a3f-7850d49f67d2"]
                                    },
                                    xValue: 0,
                                    yValue: -100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b630f31c4
                    },
                    "a-48": {
                        id: "a-48",
                        title: "Blog Widget Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-48-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blog-widget-image",
                                        selectorGuids: ["a87bb1ce-409f-96ed-f7f6-384f8cdd5c8d"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a4ae8ee66
                    },
                    "a-49": {
                        id: "a-49",
                        title: "Blog Widget Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-49-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blog-widget-image",
                                        selectorGuids: ["a87bb1ce-409f-96ed-f7f6-384f8cdd5c8d"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a4ae8ee66
                    },
                    "a-52": {
                        id: "a-52",
                        title: "Header Scroll",
                        continuousParameterGroups: [{
                            id: "a-52-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-52-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navbar",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc5"]
                                        },
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-52-n-3",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".site-logo.text",
                                            selectorGuids: ["68b772b7-9419-216b-82a5-6550a535080e", "218ef0ef-8060-96ad-2345-27dc74109884"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-52-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-button-wrap.desktop-only",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc9", "96cc5b3b-54a7-08b0-00d1-5f3507f6ede1"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-52-n-7",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navbar",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc5"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 25,
                                        bValue: 27,
                                        gValue: 24,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-52-n-9",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".site-logo.text",
                                            selectorGuids: ["68b772b7-9419-216b-82a5-6550a535080e", "218ef0ef-8060-96ad-2345-27dc74109884"]
                                        },
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-52-n-13",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".site-logo-link",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edca"]
                                        },
                                        widthValue: 140,
                                        widthUnit: "px",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-52-n-15",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-button-wrap.desktop-only",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc9", "96cc5b3b-54a7-08b0-00d1-5f3507f6ede1"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 1,
                                actionItems: [{
                                    id: "a-52-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-button-wrap.desktop-only",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc9", "96cc5b3b-54a7-08b0-00d1-5f3507f6ede1"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 5,
                                actionItems: [{
                                    id: "a-52-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navbar",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc5"]
                                        },
                                        widthValue: 75,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-52-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".site-logo.text",
                                            selectorGuids: ["68b772b7-9419-216b-82a5-6550a535080e", "218ef0ef-8060-96ad-2345-27dc74109884"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-52-n-8",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".navbar",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc5"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--footer-bg",
                                        rValue: 25,
                                        bValue: 27,
                                        gValue: 24,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-52-n-10",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".site-logo.text",
                                            selectorGuids: ["68b772b7-9419-216b-82a5-6550a535080e", "218ef0ef-8060-96ad-2345-27dc74109884"]
                                        },
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-52-n-14",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".site-logo-link",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edca"]
                                        },
                                        widthValue: 40,
                                        widthUnit: "px",
                                        heightUnit: "PX",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-52-n-16",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-button-wrap.desktop-only",
                                            selectorGuids: ["96cc5b3b-54a7-08b0-00d1-5f3507f6edc9", "96cc5b3b-54a7-08b0-00d1-5f3507f6ede1"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a4cee3691
                    },
                    "a-53": {
                        id: "a-53",
                        title: "Ready Made Image Scroll Into View",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-01",
                                        selectorGuids: ["0fcfe0fd-9fe7-da2b-019c-d3a02d69999d"]
                                    },
                                    zValue: -15,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-53-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-02",
                                        selectorGuids: ["f9958d7a-cd48-b20f-d521-d1a313f72b9f"]
                                    },
                                    zValue: 5,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-53-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-02",
                                        selectorGuids: ["f9958d7a-cd48-b20f-d521-d1a313f72b9f"]
                                    },
                                    xValue: -20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-53-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-01",
                                        selectorGuids: ["0fcfe0fd-9fe7-da2b-019c-d3a02d69999d"]
                                    },
                                    xValue: 50,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-53-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-01",
                                        selectorGuids: ["0fcfe0fd-9fe7-da2b-019c-d3a02d69999d"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-53-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-01",
                                        selectorGuids: ["0fcfe0fd-9fe7-da2b-019c-d3a02d69999d"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-53-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-02",
                                        selectorGuids: ["f9958d7a-cd48-b20f-d521-d1a313f72b9f"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-53-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ready-made-image-02",
                                        selectorGuids: ["f9958d7a-cd48-b20f-d521-d1a313f72b9f"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a4d7ee285
                    },
                    "a-54": {
                        id: "a-54",
                        title: "Ready Made Image Scrolling",
                        continuousParameterGroups: [{
                            id: "a-54-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-54-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-image-03",
                                            selectorGuids: ["00827c4e-c694-2ad5-5db1-be018afbf639"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-54-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            id: "68fbd33cd97f330ee31625ca|ebb2fa3e-c328-06f1-cbff-3f5cf20219c6"
                                        },
                                        yValue: -100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 72,
                                actionItems: [{
                                    id: "a-54-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-image-03",
                                            selectorGuids: ["00827c4e-c694-2ad5-5db1-be018afbf639"]
                                        },
                                        xValue: -20,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-54-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            id: "68fbd33cd97f330ee31625ca|ebb2fa3e-c328-06f1-cbff-3f5cf20219c6"
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a4d81d91e
                    },
                    "a-55": {
                        id: "a-55",
                        title: "Automate Scrolling",
                        continuousParameterGroups: [{
                            id: "a-55-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 25,
                                actionItems: [{
                                    id: "a-55-n-8",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908a"
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-tab-description._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e14", "aac6a8b4-5536-b114-d4a4-3592b2cbac19"]
                                        },
                                        heightValue: 80,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automate-image-wrapper",
                                            selectorGuids: ["17a863f9-bea2-896b-90f3-46c47c31b411"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-55-n-23",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-tab-title._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e15", "b4475607-1f44-3c15-608f-32a2a3d0de69"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-36",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908b"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-37",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".atomate-tab-link",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e24"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--black-secondary",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-49",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|ab37b2ae-ad75-5d64-5401-cbf8968269e2"
                                        },
                                        globalSwatchId: "",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-52",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "eaf868e6-cb4b-558c-f0da-c849da8de072"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-60",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._02",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "b5e28095-52ac-3f65-1218-263c36b26311"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-55-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automate-image-wrapper",
                                            selectorGuids: ["17a863f9-bea2-896b-90f3-46c47c31b411"]
                                        },
                                        yValue: -25,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-55-n-7",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908a"
                                        },
                                        heightValue: 80,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-tab-description._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e14", "aac6a8b4-5536-b114-d4a4-3592b2cbac19"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-25",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-tab-title._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e15", "b4475607-1f44-3c15-608f-32a2a3d0de69"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-34",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908b"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-38",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908b"
                                        },
                                        globalSwatchId: "",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-39",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".atomate-tab-link",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e24"]
                                        },
                                        globalSwatchId: "",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-40",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|ab37b2ae-ad75-5d64-5401-cbf8968269e2"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--black-secondary",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-51",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "eaf868e6-cb4b-558c-f0da-c849da8de072"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-53",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._02",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "b5e28095-52ac-3f65-1218-263c36b26311"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-62",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "eaf868e6-cb4b-558c-f0da-c849da8de072"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 35,
                                actionItems: [{
                                    id: "a-55-n-9",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-tab-description._01",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e14", "aac6a8b4-5536-b114-d4a4-3592b2cbac19"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-10",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908a"
                                        },
                                        heightValue: 80,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automate-image-wrapper",
                                            selectorGuids: ["17a863f9-bea2-896b-90f3-46c47c31b411"]
                                        },
                                        yValue: -25,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-55-n-13",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89091"
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-26",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908b"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-35",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89092"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-46",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|ab37b2ae-ad75-5d64-5401-cbf8968269e2"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--black-secondary",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-50",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|150c0033-3e8e-24f3-42b9-78f8a811cd81"
                                        },
                                        globalSwatchId: "",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-61",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._03",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "2185cca6-26db-04bd-6adc-e85b72253303"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-54",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._02",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "b5e28095-52ac-3f65-1218-263c36b26311"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 40,
                                actionItems: [{
                                    id: "a-55-n-12",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89091"
                                        },
                                        heightValue: 80,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automate-image-wrapper",
                                            selectorGuids: ["17a863f9-bea2-896b-90f3-46c47c31b411"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-55-n-15",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908a"
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-29",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89092"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-41",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|ab37b2ae-ad75-5d64-5401-cbf8968269e2"
                                        },
                                        globalSwatchId: "",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-45",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|150c0033-3e8e-24f3-42b9-78f8a811cd81"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--black-secondary",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-55",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._03",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "2185cca6-26db-04bd-6adc-e85b72253303"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-63",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._02",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "b5e28095-52ac-3f65-1218-263c36b26311"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-55-n-16",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89091"
                                        },
                                        heightValue: 80,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-17",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automate-image-wrapper",
                                            selectorGuids: ["17a863f9-bea2-896b-90f3-46c47c31b411"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-55-n-18",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908a"
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-19",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89098"
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-30",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89092"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-33",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89099"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-42",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|ab37b2ae-ad75-5d64-5401-cbf8968269e2"
                                        },
                                        globalSwatchId: "",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-43",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|150c0033-3e8e-24f3-42b9-78f8a811cd81"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--black-secondary",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-47",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|93b1cf91-9cd1-fae2-1b2c-7a23d5bd56a4"
                                        },
                                        globalSwatchId: "",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-56",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._03",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "2185cca6-26db-04bd-6adc-e85b72253303"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-58",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._04",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "8af29119-c52f-7d05-f0cc-419e1b28e702"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-55-n-20",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89098"
                                        },
                                        heightValue: 80,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-21",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automate-image-wrapper",
                                            selectorGuids: ["17a863f9-bea2-896b-90f3-46c47c31b411"]
                                        },
                                        yValue: -75,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-55-n-22",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89091"
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-55-n-28",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e8908b"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-31",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89092"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-32",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|4106fff7-e460-29c8-15b2-e8cb95e89099"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--white",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-44",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|150c0033-3e8e-24f3-42b9-78f8a811cd81"
                                        },
                                        globalSwatchId: "",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-55-n-48",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id: "68fbd33cd97f330ee31625ca|93b1cf91-9cd1-fae2-1b2c-7a23d5bd56a4"
                                        },
                                        globalSwatchId: "--_colors---primary-colors--black-secondary",
                                        rValue: 34,
                                        bValue: 34,
                                        gValue: 34,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-55-n-57",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._03",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "2185cca6-26db-04bd-6adc-e85b72253303"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-55-n-59",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".automation-left-title._04",
                                            selectorGuids: ["1a14755f-fb23-11b8-13f5-cd7dbca06e0f", "8af29119-c52f-7d05-f0cc-419e1b28e702"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a4d8f6b0b
                    },
                    "a-57": {
                        id: "a-57",
                        title: "Fade In 0.6",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-57-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-57-n-2",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-57-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-57-n-6",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 600,
                                    easing: "",
                                    duration: 600,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|2542abd2-70f5-5345-fe72-6ec5d77d7d29"
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "f223",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-57-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-57-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 600,
                                    easing: "outQuart",
                                    duration: 1200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68ab48710232ad81bf91c21c|59190428-9aa8-fa89-1c02-9a47a27414df"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x198a90bfc4e
                    },
                    "a-58": {
                        id: "a-58",
                        title: "Process Section Scroll",
                        continuousParameterGroups: [{
                            id: "a-58-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 28,
                                actionItems: [{
                                    id: "a-58-n",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._01",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "081ff519-4b40-20c4-5855-9bb122a3d33e"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--primary-text",
                                        rValue: 10,
                                        bValue: 10,
                                        gValue: 10,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-58-n-8",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._02",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "8ebdc8c8-1e7e-40f5-a32c-77071f70e382"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-58-n-2",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._01",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "081ff519-4b40-20c4-5855-9bb122a3d33e"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-58-n-3",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._02",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "8ebdc8c8-1e7e-40f5-a32c-77071f70e382"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--primary-text",
                                        rValue: 10,
                                        bValue: 10,
                                        gValue: 10,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 49,
                                actionItems: [{
                                    id: "a-58-n-4",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._02",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "8ebdc8c8-1e7e-40f5-a32c-77071f70e382"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--primary-text",
                                        rValue: 10,
                                        bValue: 10,
                                        gValue: 10,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-58-n-9",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._03",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "63339f17-e65f-dbc1-d69b-404c1f9ab487"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-58-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._02",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "8ebdc8c8-1e7e-40f5-a32c-77071f70e382"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                        rValue: 175,
                                        bValue: 175,
                                        gValue: 175,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-58-n-6",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._03",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "63339f17-e65f-dbc1-d69b-404c1f9ab487"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--primary-text",
                                        rValue: 10,
                                        bValue: 10,
                                        gValue: 10,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-58-n-7",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".process-number-wrap._03",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafeb", "63339f17-e65f-dbc1-d69b-404c1f9ab487"]
                                        },
                                        globalSwatchId: "--_colors---primary-colors--primary-text",
                                        rValue: 10,
                                        bValue: 10,
                                        gValue: 10,
                                        aValue: 1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 1762255265e3
                    },
                    "a-59": {
                        id: "a-59",
                        title: "Feature Comet Move",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-59-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e4,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|caadd994-59d3-eefe-6935-7e3d9abea3ec"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-59-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|caadd994-59d3-eefe-6935-7e3d9abea3ec"
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a501417be
                    },
                    "a-60": {
                        id: "a-60",
                        title: "Automation 01 Hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-60-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-23",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "fd72309e-600e-b727-8b7f-ec04b5df8c45"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-22",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "abedc17d-93f3-8143-344b-768c4003c7cf"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-21",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "190ec531-e34c-8f4e-5b62-52f3ba293ed3"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "d71b590e-b970-138a-88c2-33656cd54c6b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".automation-icon._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "86537357-62b7-091a-a04d-66bce5efe94e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b43"
                                    },
                                    globalSwatchId: "--_colors---primary-colors--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._03",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ae175c52-8fb9-5c56-e287-231ec0c25d13"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._04",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "39273470-8f18-8243-b712-23e122ec7db9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "154d974a-618c-9b70-0e98-c68bf9c81d17"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "5e68bca5-44b1-365d-06e3-76789bfa510a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-60-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "5e68bca5-44b1-365d-06e3-76789bfa510a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-26",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "fd72309e-600e-b727-8b7f-ec04b5df8c45"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-25",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "abedc17d-93f3-8143-344b-768c4003c7cf"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-24",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "190ec531-e34c-8f4e-5b62-52f3ba293ed3"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "74aa38c4-85a4-ddaf-a77c-7bb88f9145e7"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-60-n-19",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "d7a2f8ba-fe77-95b7-b176-738682acc85f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-60-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "b60c5ad9-28e9-e16b-5186-dd579b195e6e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-60-n-17",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._01",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ce388caa-2cf4-ef2d-3b15-f06004433849"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "154d974a-618c-9b70-0e98-c68bf9c81d17"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._04",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "39273470-8f18-8243-b712-23e122ec7db9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._03",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ae175c52-8fb9-5c56-e287-231ec0c25d13"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-13",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b43"
                                    },
                                    globalSwatchId: "--_colors---primary-colors--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-60-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".automation-icon._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "86537357-62b7-091a-a04d-66bce5efe94e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "d71b590e-b970-138a-88c2-33656cd54c6b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a5281a5ff
                    },
                    "a-61": {
                        id: "a-61",
                        title: "Automation 02 Hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-61-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-16",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "fd72309e-600e-b727-8b7f-ec04b5df8c45"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-15",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "abedc17d-93f3-8143-344b-768c4003c7cf"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "74aa38c4-85a4-ddaf-a77c-7bb88f9145e7"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-61-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "d7a2f8ba-fe77-95b7-b176-738682acc85f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-61-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "b60c5ad9-28e9-e16b-5186-dd579b195e6e"]
                                    },
                                    yValue: -40,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-61-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._01",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ce388caa-2cf4-ef2d-3b15-f06004433849"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "5e68bca5-44b1-365d-06e3-76789bfa510a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "154d974a-618c-9b70-0e98-c68bf9c81d17"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._04",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "39273470-8f18-8243-b712-23e122ec7db9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._03",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ae175c52-8fb9-5c56-e287-231ec0c25d13"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b43"
                                    },
                                    globalSwatchId: "--_colors---primary-colors--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-61-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "86537357-62b7-091a-a04d-66bce5efe94e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "d71b590e-b970-138a-88c2-33656cd54c6b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-61-n-11",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "28fd0118-1205-73d3-e806-b9b58e2a556a"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a5281a5ff
                    },
                    "a-62": {
                        id: "a-62",
                        title: "Automation 03 Hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-62-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-17",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "fd72309e-600e-b727-8b7f-ec04b5df8c45"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-62-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "74aa38c4-85a4-ddaf-a77c-7bb88f9145e7"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-62-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "d7a2f8ba-fe77-95b7-b176-738682acc85f"]
                                    },
                                    yValue: -68,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-62-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "b60c5ad9-28e9-e16b-5186-dd579b195e6e"]
                                    },
                                    yValue: -40,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-62-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._01",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ce388caa-2cf4-ef2d-3b15-f06004433849"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "5e68bca5-44b1-365d-06e3-76789bfa510a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "154d974a-618c-9b70-0e98-c68bf9c81d17"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._04",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "39273470-8f18-8243-b712-23e122ec7db9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._03",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ae175c52-8fb9-5c56-e287-231ec0c25d13"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-8",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-body._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "abedc17d-93f3-8143-344b-768c4003c7cf"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-62-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "86537357-62b7-091a-a04d-66bce5efe94e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "d71b590e-b970-138a-88c2-33656cd54c6b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-62-n-12",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "28fd0118-1205-73d3-e806-b9b58e2a556a"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-62-n-14",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "190ec531-e34c-8f4e-5b62-52f3ba293ed3"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a5281a5ff
                    },
                    "a-63": {
                        id: "a-63",
                        title: "Automation 04 Hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-63-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-18",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "abedc17d-93f3-8143-344b-768c4003c7cf"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-63-n-17",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "28fd0118-1205-73d3-e806-b9b58e2a556a"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-63-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "74aa38c4-85a4-ddaf-a77c-7bb88f9145e7"]
                                    },
                                    yValue: -95,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-63-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._04",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "39273470-8f18-8243-b712-23e122ec7db9"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "d7a2f8ba-fe77-95b7-b176-738682acc85f"]
                                    },
                                    yValue: -68,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-63-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-image._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8caff2", "b60c5ad9-28e9-e16b-5186-dd579b195e6e"]
                                    },
                                    yValue: -40,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-63-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._01",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ce388caa-2cf4-ef2d-3b15-f06004433849"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._04",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "5e68bca5-44b1-365d-06e3-76789bfa510a"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._03",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "154d974a-618c-9b70-0e98-c68bf9c81d17"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._03",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "ae175c52-8fb9-5c56-e287-231ec0c25d13"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-9",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b43"
                                    },
                                    globalSwatchId: "--_colors---primary-colors--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-63-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "86537357-62b7-091a-a04d-66bce5efe94e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".automation-icon._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe2", "d71b590e-b970-138a-88c2-33656cd54c6b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".image._02",
                                        selectorGuids: ["d81e5b5b-ce95-a3b5-d03c-ab96ccf0fa00", "85498fd9-472d-d0ea-2a96-66ca7a1c69fe"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-63-n-13",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._01",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "28fd0118-1205-73d3-e806-b9b58e2a556a"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }, {
                                id: "a-63-n-14",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".automation-body._02",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafec", "190ec531-e34c-8f4e-5b62-52f3ba293ed3"]
                                    },
                                    globalSwatchId: "--_colors---primary-colors--paragraph-color",
                                    rValue: 175,
                                    bValue: 175,
                                    gValue: 175,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a5281a5ff
                    },
                    "a-64": {
                        id: "a-64",
                        title: "Startup Logo Marquee",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-64-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e4,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".logo-wrap",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafed"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-64-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".logo-wrap",
                                        selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafed"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a52a13e7d
                    },
                    "a-65": {
                        id: "a-65",
                        title: "Team Widget Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-65-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".team-image",
                                        selectorGuids: ["288cf265-85d5-67c9-3113-0601cebd9dac"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a52c95ba6
                    },
                    "a-66": {
                        id: "a-66",
                        title: "Team Widget Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-66-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".team-image",
                                        selectorGuids: ["288cf265-85d5-67c9-3113-0601cebd9dac"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a52c95ba6
                    },
                    "a-67": {
                        id: "a-67",
                        title: "Automation Logo Scroll Into View",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-67-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b4e"
                                    },
                                    yValue: -10,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-67-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68fbd33cd97f330ee31625cb|c80e29df-45d3-500f-d217-16a5cec50b4e"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a532bbd87
                    },
                    "a-68": {
                        id: "a-68",
                        title: "Feature Quote Mouse Move",
                        continuousParameterGroups: [{
                            id: "a-68-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-68-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".feature-decorative-particle",
                                            selectorGuids: ["c2ac2aa2-b695-744a-a86f-60039c21997a"]
                                        },
                                        yValue: 30,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-68-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".feature-decorative-particle",
                                            selectorGuids: ["c2ac2aa2-b695-744a-a86f-60039c21997a"]
                                        },
                                        yValue: -30,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-68-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-68-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".feature-decorative-particle",
                                            selectorGuids: ["c2ac2aa2-b695-744a-a86f-60039c21997a"]
                                        },
                                        xValue: 30,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-68-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".feature-decorative-particle",
                                            selectorGuids: ["c2ac2aa2-b695-744a-a86f-60039c21997a"]
                                        },
                                        xValue: -30,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a538d4775
                    },
                    "a-69": {
                        id: "a-69",
                        title: "Feature Banner Image Scroll",
                        continuousParameterGroups: [{
                            id: "a-69-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-69-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".feature-banner-image-wrap",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe0"]
                                        },
                                        xValue: 30,
                                        xUnit: "deg",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-69-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".feature-banner-image-wrap",
                                            selectorGuids: ["adf0b696-8d03-c210-eca3-11292f8cafe0"]
                                        },
                                        xValue: 0,
                                        xUnit: "deg",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a5391de45
                    },
                    "a-70": {
                        id: "a-70",
                        title: "Hero Comet",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-70-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-70-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    xValue: -70,
                                    yValue: 100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-70-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-70-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-70-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hero-comet",
                                        selectorGuids: ["e60dc94e-e357-1c92-373a-dcb1a23ad47e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a53e72d16
                    },
                    "a-71": {
                        id: "a-71",
                        title: "Hero Section Scroll",
                        continuousParameterGroups: [{
                            id: "a-71-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-71-n-19",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-71-n-17",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: 7,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-71-n-15",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -150,
                                        yValue: 50,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -110,
                                        yValue: 50,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 100,
                                        yValue: 40,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: -5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-71-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 100,
                                        yValue: 40,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 20,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: -100,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-11",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: 5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 75,
                                actionItems: [{
                                    id: "a-71-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-71-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-12",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-71-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-16",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-71-n-18",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-71-n-20",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a592f5672
                    },
                    "a-41": {
                        id: "a-41",
                        title: "Brand Logo Marquee",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-41-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e4,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".brands-logo-row",
                                        selectorGuids: ["ebdf3fc2-7c28-70d9-54e7-c304111bda0d"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-41-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".brands-logo-row",
                                        selectorGuids: ["ebdf3fc2-7c28-70d9-54e7-c304111bda0d"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a4400d040
                    },
                    "a-42": {
                        id: "a-42",
                        title: "Ready Made Scrolling (Desktop)",
                        continuousParameterGroups: [{
                            id: "a-42-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 15,
                                actionItems: [{
                                    id: "a-42-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-bg",
                                            selectorGuids: ["b7e1060a-cc1d-8cd3-6b99-817cdefcf0c9"]
                                        },
                                        widthValue: 20,
                                        heightValue: 40,
                                        widthUnit: "%",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 21,
                                actionItems: [{
                                    id: "a-42-n-8",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-bg",
                                            selectorGuids: ["b7e1060a-cc1d-8cd3-6b99-817cdefcf0c9"]
                                        },
                                        widthValue: 20,
                                        heightValue: 40,
                                        widthUnit: "%",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-42-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".ready-made-bg",
                                            selectorGuids: ["b7e1060a-cc1d-8cd3-6b99-817cdefcf0c9"]
                                        },
                                        widthValue: 100,
                                        heightValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a45367c87
                    },
                    slideInBottom: {
                        id: "slideInBottom",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    fadeIn: {
                        id: "fadeIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            }), Webflow.require("commerce") && Webflow.require("commerce").init({
                siteId: "68fbd33cd97f330ee31625d9",
                apiUrl: "https://render.webflow.com"
            }), "complete" === document.readyState ? e() : document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && e()
            })
        }
    }
]);