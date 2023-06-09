"""Add variables to PipelineRun.

Revision ID: 067326f43bc3
Revises: 3fafd217efa7
Create Date: 2022-09-04 20:57:04.233510

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '067326f43bc3'
down_revision = '3fafd217efa7'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('pipeline_run', sa.Column('variables', sa.JSON(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('pipeline_run', 'variables')
    # ### end Alembic commands ###
