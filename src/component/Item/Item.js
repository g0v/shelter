import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { Label } from 'component';
import color from 'color';

const Touchable = Platform.select({
  ios: () => TouchableOpacity,
  android: () => TouchableNativeFeedback,
})();

const sh = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    overflow: 'hidden',
  },
  border: {
    borderTopColor: color.border,
    borderTopWidth: 1,
  },
  label: {
    flex: 1,
  },
});

export default class Item extends Component {

  static displayName = 'Item';

  static propTypes = {
    label: PropTypes.string,
    tip: PropTypes.string,
    children: PropTypes.node,
    isFirst: PropTypes.bool,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    isFirst: false,
  }

  render() {
    const { label, tip, children, isFirst, onPress } = this.props;
    return (
      <Touchable onPress={onPress} disabled={!onPress}>
        <View style={[sh.container, !isFirst && sh.border]}>
          <Label style={sh.label}>{label}</Label>
          {tip && <Text>{tip}</Text>}
          {children && <View>{children}</View>}
        </View>
      </Touchable>
    );
  }
}