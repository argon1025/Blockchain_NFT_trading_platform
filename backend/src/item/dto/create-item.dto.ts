import { ApiProperty, PickType } from '@nestjs/swagger';
import { ItemHistory } from 'src/entities/ItemHistory';

export class CreateItemDto extends PickType(ItemHistory, ['content']) {
  @ApiProperty({
    example: 'Ipad',
    description: '제품명',
    required: true,
  })
  title: string;
}
