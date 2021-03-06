define(function (require) {
  return function SignificantTermsAggDefinition(Private) {
    var _ = require('lodash');
    var AggType = Private(require('components/agg_types/_agg_type'));

    return new AggType({
      name: 'significant_terms',
      title: 'Significant Terms',
      makeLabel: function (aggConfig) {
        return 'Top ' + aggConfig.params.size + ' unusual terms in ' + aggConfig.params.field.name;
      },
      params: [
        {
          name: 'field',
          filterFieldTypes: 'string'
        },
        {
          name: 'size',
          editor: require('text!components/agg_types/controls/order_and_size.html'),
        },
        {
          name: 'exclude',
          type: 'regex',
          advanced: true
        },
        {
          name: 'include',
          type: 'regex',
          advanced: true
        }
      ]
    });
  };
});