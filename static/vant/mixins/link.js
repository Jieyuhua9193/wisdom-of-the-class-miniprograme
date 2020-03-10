export var link = Behavior({
    properties: {
        url: String,
        linkType: {
            type: String,
            value: 'navigateTo'
        }
    },
    methods: {
        jumpLink(urlKey = 'url') {
            var url = this.data[urlKey];
            if (url) {
                wx[this.data.linkType]({ url });
            }
        }
    }
});
