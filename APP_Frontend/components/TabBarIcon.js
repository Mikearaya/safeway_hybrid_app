/*
 * @CreateTime: Apr 7, 2019 10:04 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:04 AM
 * @Description: Modify Here, Please
 */
import React from "react";
import { Icon } from "expo";

import Colors from "../constants/Colors";

export default class TabBarIcon extends React.Component {
	render() {
		return (
			<Icon.Ionicons
				name={this.props.name}
				size={26}
				style={{ marginBottom: -3 }}
				color={
					this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
				}
			/>
		);
	}
}
